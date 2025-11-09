"use client";

import { useState } from "react";
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
import { Loader2, Search, MessageSquare, User, Bot } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface Message {
  sender: "user" | "agent";
  content: string;
  type: string;
  formatted_time: string;
}

interface ConversationResult {
  success: boolean;
  messages: Message[];
  total_messages: number;
  user_id?: string;
}

export default function UserConversationsPage() {
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<Message[]>([]);
  const [totalMessages, setTotalMessages] = useState(0);
  const [searchedUserId, setSearchedUserId] = useState("");

  const searchUserConversations = async () => {
    if (!userId.trim()) {
      toast.error("Please enter a user ID or phone number");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get<ConversationResult>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/user-conversations/${userId.trim()}`,
        {
          withCredentials: true,
        }
      );

      if (response.data.success && response.data.messages.length > 0) {
        setConversations(response.data.messages);
        setTotalMessages(response.data.total_messages);
        setSearchedUserId(userId.trim());
        toast.success(`Found ${response.data.total_messages} messages`);
      } else {
        setConversations([]);
        setTotalMessages(0);
        setSearchedUserId("");
        toast.info(`No conversation history found for user: ${userId.trim()}`);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.detail || "Failed to fetch conversations"
      );
      setConversations([]);
      setTotalMessages(0);
      setSearchedUserId("");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchUserConversations();
    }
  };

  return (
    <div className="space-y-6 text-black">
      {/* Search Card */}
      <Card>
        <CardHeader>
          <CardTitle>User Conversations | Can show upto last 50 messages</CardTitle>
          <CardDescription>
            Search and view conversation history for any user
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userId">User ID or Phone Number</Label>
              <div className="flex gap-2">
                <Input
                  id="userId"
                  type="text"
                  placeholder="Enter user ID or phone number"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button
                  onClick={searchUserConversations}
                  disabled={loading}
                  className="min-w-[120px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Enter the user's ID or WhatsApp number to view their complete
                conversation history
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conversation Results */}
      {conversations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Conversation History</CardTitle>
            <CardDescription>
              User: <strong>{searchedUserId}</strong> • Total Messages:{" "}
              <strong>{totalMessages}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {conversations.map((msg, index) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={index}
                    className={`rounded-lg border-l-4 p-4 transition-all hover:shadow-md ${
                      isUser
                        ? "border-l-green-500 bg-blue-50 ml-8"
                        : "border-l-purple-500 bg-purple-50 mr-8"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                      {isUser ? (
                        <User className="h-3 w-3" />
                      ) : (
                        <Bot className="h-3 w-3" />
                      )}
                      <span className="font-semibold">
                        {isUser ? "User" : "Agent"}
                      </span>
                      <span>•</span>
                      <span>{msg.formatted_time}</span>
                      <span>•</span>
                      <span className="uppercase">{msg.type}</span>
                    </div>
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {!loading && conversations.length === 0 && searchedUserId === "" && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No Conversations Yet</p>
              <p className="text-sm">
                Search for a user ID or phone number to view their conversation
                history
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}