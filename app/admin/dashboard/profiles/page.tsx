"use client";

import { useState } from "react";
import { Send, Plus, X, Loader2, Linkedin, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { InputWithLabel } from "@/components/ui/input";
import { TextareaWithLabel } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { Profile } from "@/lib/types";

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      id: 1,
      name: "",
      email: "",
      linkedin_url: "",
      summary: "",
      match_reason: "",
    },
  ]);
  const [userPhone, setUserPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const addProfile = () => {
    setProfiles([
      ...profiles,
      {
        id: profiles.length + 1,
        name: "",
        email: "",
        linkedin_url: "",
        summary: "",
        match_reason: "",
      },
    ]);
  };

  const removeProfile = (id: number) => {
    if (profiles.length === 1) {
      toast.error("At least one profile is required");
      return;
    }
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  const handleSendProfiles = async () => {
    if (!userPhone) {
      toast.error("Please enter user phone number");
      return;
    }

    const formData = new FormData();
    formData.append("user_phone", userPhone);
    formData.append("profiles", JSON.stringify(profiles));

    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/send-profile`,
        formData,
        { withCredentials: true }
      );
      toast.success("Profiles sent successfully!");
    } catch (error) {
      toast.error("Failed to send profiles");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-indigo-600" />
            Send Manual Profiles
          </h2>

          <div className="space-y-6">
            <InputWithLabel
              label="User WhatsApp Number"
              placeholder="e.g., 919876543210"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />

            {profiles.map((profile, index) => (
              <div
                key={profile.id}
                className="p-6 border-2 border-gray-200 rounded-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold text-sm">
                    {index + 1}
                  </span>
                  {profiles.length > 1 && (
                    <button
                      onClick={() => removeProfile(profile.id)}
                      className="text-red-600 hover:text-red-700 p-1 rounded-lg hover:bg-red-50"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <InputWithLabel
                    label="Name *"
                    placeholder="John Smith"
                    value={profile.name}
                    onChange={(e) => {
                      const updated = [...profiles];
                      updated[index].name = e.target.value;
                      setProfiles(updated);
                    }}
                  />
                  <InputWithLabel
                    label="Email"
                    type="email"
                    placeholder="john@company.com"
                    value={profile.email}
                    onChange={(e) => {
                      const updated = [...profiles];
                      updated[index].email = e.target.value;
                      setProfiles(updated);
                    }}
                  />
                </div>

                <InputWithLabel
                  label="LinkedIn URL *"
                  placeholder="https://linkedin.com/in/johnsmith"
                  value={profile.linkedin_url}
                  onChange={(e) => {
                    const updated = [...profiles];
                    updated[index].linkedin_url = e.target.value;
                    setProfiles(updated);
                  }}
                />

                <TextareaWithLabel
                  label="Summary *"
                  placeholder="Senior Product Manager at Google with 8+ years in tech..."
                  value={profile.summary}
                  onChange={(e) => {
                    const updated = [...profiles];
                    updated[index].summary = e.target.value;
                    setProfiles(updated);
                  }}
                />

                <TextareaWithLabel
                  label="Why This Match"
                  placeholder="Perfect match for your needs because..."
                  value={profile.match_reason}
                  onChange={(e) => {
                    const updated = [...profiles];
                    updated[index].match_reason = e.target.value;
                    setProfiles(updated);
                  }}
                />
              </div>
            ))}

            <div className="flex gap-4">
              <Button variant="outline" onClick={addProfile}>
                <Plus className="w-4 h-4 mr-2" />
                Add Another Profile
              </Button>
              <Button disabled={loading} onClick={handleSendProfiles}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Profiles
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <Linkedin className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Profile Sending Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ensure LinkedIn URLs are complete and valid</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Add detailed summaries to increase match quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Phone numbers should include country code without + symbol
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
