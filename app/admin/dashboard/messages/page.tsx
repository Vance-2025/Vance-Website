"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, MessageSquare, Users } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface Template {
  id: string;
  name: string;
  description: string;
  template: string;
  category: string;
  whatsapp_template_name?: string;
  variables?: string[];
}

interface TemplatesByCategory {
  [category: string]: {
    [id: string]: Template;
  };
}

interface MessageHistoryItem {
  userId: string;
  message: string;
  timestamp: number;
}

interface VariableOverrides {
  [key: string]: string;
}

export default function ManualMessagingPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<TemplatesByCategory>({});
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [userId, setUserId] = useState("");
  const [variableOverrides, setVariableOverrides] = useState<VariableOverrides>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [messageHistory, setMessageHistory] = useState<MessageHistoryItem[]>(
    []
  );
  const [stats, setStats] = useState({ messagesSent: 0, usersMessaged: 0 });

  // Load templates on mount
  useEffect(() => {
    loadTemplates();
    loadMessageHistory();
  }, []);

  const loadTemplates = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/templates`,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setTemplates(response.data.templates);
      }
    } catch (error) {
      toast.error("Failed to load templates");
      router.push("/admin/dashboard");
    }
  };

  const loadMessageHistory = () => {
    const history = localStorage.getItem("adminMessageHistory");
    if (history) {
      setMessageHistory(JSON.parse(history));
    }
  };

  const saveMessageToHistory = (userId: string, message: string) => {
    const newMessage: MessageHistoryItem = {
      userId,
      message,
      timestamp: Date.now(),
    };

    const updatedHistory = [newMessage, ...messageHistory].slice(0, 50);
    setMessageHistory(updatedHistory);
    localStorage.setItem("adminMessageHistory", JSON.stringify(updatedHistory));
  };

  const getSelectedTemplate = (): Template | null => {
    for (const category of Object.values(templates)) {
      if (category[selectedTemplateId]) {
        return category[selectedTemplateId];
      }
    }
    return null;
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setVariableOverrides({});
  };

  const handleVariableChange = (variable: string, value: string) => {
    setVariableOverrides((prev) => ({
      ...prev,
      [variable]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) {
      toast.error("Please enter a valid User ID");
      return;
    }

    if (!selectedTemplateId) {
      toast.error("Please select a template");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("user_id", userId.trim());
      formData.append("template_id", selectedTemplateId);

      // Add variable overrides
      Object.entries(variableOverrides).forEach(([key, value]) => {
        if (value.trim()) {
          formData.append(`var_${key}`, value.trim());
        }
      });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/send-template-message`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message || "Message sent successfully");

        // Save to history
        const template = getSelectedTemplate();
        if (template) {
          saveMessageToHistory(userId, template.template);
        }

        // Update stats
        setStats((prev) => ({
          messagesSent: prev.messagesSent + 1,
          usersMessaged: prev.usersMessaged + 1,
        }));

        // Clear form
        setUserId("");
        setSelectedTemplateId("");
        setVariableOverrides({});
      }
    } catch (error: any) {
      toast.error(error.response?.data?.detail || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // Get all templates as flat array
  const getAllTemplates = (): Template[] => {
    const allTemplates: Template[] = [];
    Object.entries(templates).forEach(([category, categoryTemplates]) => {
      Object.entries(categoryTemplates).forEach(([id, template]) => {
        allTemplates.push({ ...template, category });
      });
    });
    return allTemplates;
  };

  const selectedTemplate = getSelectedTemplate();
  const allTemplates = getAllTemplates();

  return (
    <div className="space-y-6 text-black">
      {/* Send Template Message */}
      <Card>
        <CardHeader>
          <CardTitle>💬 Send Template Message</CardTitle>
          <CardDescription>
            Send a pre-approved template message to a user via WhatsApp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Template Tabs */}
            <div className="space-y-2">
              <Label>Select Template</Label>
              <div className="flex flex-wrap gap-2">
                {allTemplates.map((template) => (
                  <Button
                    key={template.id}
                    type="button"
                    variant={
                      selectedTemplateId === template.id
                        ? "default"
                        : "outline"
                    }
                    onClick={() => handleTemplateChange(template.id)}
                    className="text-sm bg-gray-100 hover:bg-gray-200"
                  >
                    {template.name}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Select a pre-defined template message to send.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="userId">User ID (WhatsApp Number)</Label>
              <Input
                id="userId"
                type="text"
                placeholder="e.g., 919876543210"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
              <p className="text-sm text-muted-foreground">
                Enter the user's WhatsApp number with country code (e.g.,
                1234567890 for US, 919876543210 for India). No + or spaces.
              </p>
            </div>

            {/* Variable Inputs */}
            {selectedTemplate &&
              selectedTemplate.variables &&
              selectedTemplate.variables.length > 0 && (
                <div className="space-y-2">
                  <Label>Template Variables</Label>
                  <div className="space-y-3 rounded-md border p-4">
                    {selectedTemplate.variables.map((variable) => (
                      <div key={variable} className="space-y-1">
                        <Label htmlFor={`var_${variable}`} className="text-sm">
                          {variable
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Label>
                        <Input
                          id={`var_${variable}`}
                          type="text"
                          placeholder={`Enter ${variable}`}
                          value={variableOverrides[variable] || ""}
                          onChange={(e) =>
                            handleVariableChange(variable, e.target.value)
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You can override values for this send. If left blank, we'll
                    use the user's profile.
                  </p>
                </div>
              )}

            <div className="space-y-2">
              <Label htmlFor="preview">Message Preview</Label>
              <Textarea
                id="preview"
                value={selectedTemplate ? selectedTemplate.template : ""}
                readOnly
                placeholder="Select a template to see preview..."
                rows={6}
                className="font-mono text-sm"
              />
              <p className="text-sm text-muted-foreground">
                Preview of the selected template message.
              </p>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Template Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Recent Messages */}
      <Card>
        <CardHeader>
          <CardTitle>📋 Recent Messages</CardTitle>
          <CardDescription>
            History of messages sent from this session
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-h-96 space-y-2 overflow-y-auto">
            {messageHistory.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No messages sent yet. Send your first message above!
              </p>
            ) : (
              messageHistory.map((msg, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-l-4 border-l-primary bg-muted/50 p-3"
                >
                  <div className="text-xs text-muted-foreground mb-1">
                    <strong>To:</strong> {msg.userId} | <strong>Sent:</strong>{" "}
                    {new Date(msg.timestamp).toLocaleString()}
                  </div>
                  <div className="text-sm">{msg.message}</div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}