"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BarChart3, Eye, ChevronRight, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { InputWithLabel } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    if (!formData.username || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const form = new FormData();
      form.append("username", formData.username);
      form.append("password", formData.password);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/login`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // ✅ important for FastAPI SessionMiddleware
        }
      );

      // FastAPI will redirect on success
      if (response.status === 200 || response.status === 303) {
        toast.success("Welcome back!");
        router.push("/admin/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-lg shadow-indigo-500/30">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Vance Admin
          </h1>
          <p className="text-gray-600 mt-2">Sign in to your dashboard</p>
        </div>

        <div className="space-y-4">
          <InputWithLabel
            label="Username"
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Enter username"
          />

          <InputWithLabel
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
          />

          <Button className="w-full" disabled={loading} onClick={handleLogin}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-sm text-gray-600 border border-gray-200">
          <p className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Demo Credentials
          </p>
          <div className="space-y-1">
            <p>
              Username:{" "}
              <span className="font-mono font-semibold text-gray-900">
                admin
              </span>
            </p>
            <p>
              Password:{" "}
              <span className="font-mono font-semibold text-gray-900">
                vance2024
              </span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
