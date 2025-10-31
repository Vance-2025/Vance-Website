'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';

// Types
interface FormData {
    name: string;
    email: string;
    linkedin: string;
    phoneNumber: string;
    startupName: string;
    startupEmail: string;
    websiteOrDeck: string;
    problemSolving: string;
    solution: string;
    targetUsers: string;
    stage: string;
    traction: string;
    foundingTeam: string;
    vision: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function ApplicationPage() {
    const router = useRouter();
    const [currentSection, setCurrentSection] = useState<1 | 2>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        linkedin: '',
        phoneNumber: '',
        startupName: '',
        startupEmail: '',
        websiteOrDeck: '',
        problemSolving: '',
        solution: '',
        targetUsers: '',
        stage: '',
        traction: '',
        foundingTeam: '',
        vision: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateSection1 = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // LinkedIn validation - accepts worldwide profiles with any language path
        if (!formData.linkedin.trim()) {
            newErrors.linkedin = 'LinkedIn profile is required';
        } else {
            const linkedinValue = formData.linkedin.trim().toLowerCase();

            // Just check if it contains linkedin.com
            const hasLinkedIn = linkedinValue.includes('linkedin.com');

            if (!hasLinkedIn) {
                newErrors.linkedin = 'Please enter a valid LinkedIn profile URL';
            }
        }

        // Phone number validation
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else {
            // Remove all non-digit characters for validation
            const digitsOnly = formData.phoneNumber.replace(/\D/g, '');

            // Check if it has at least 10 digits (international format)
            if (digitsOnly.length < 10) {
                newErrors.phoneNumber = 'Please enter a valid phone number (minimum 10 digits)';
            } else if (digitsOnly.length > 15) {
                newErrors.phoneNumber = 'Phone number is too long';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateSection2 = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.startupName.trim()) {
            newErrors.startupName = 'Startup name is required';
        }

        if (!formData.startupEmail.trim()) {
            newErrors.startupEmail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.startupEmail)) {
            newErrors.startupEmail = 'Invalid email format';
        }

        if (!formData.problemSolving.trim()) {
            newErrors.problemSolving = 'This field is required';
        }

        if (!formData.solution.trim()) {
            newErrors.solution = 'This field is required';
        }

        if (!formData.targetUsers.trim()) {
            newErrors.targetUsers = 'This field is required';
        }

        if (!formData.stage) {
            newErrors.stage = 'Please select a stage';
        }

        if (!formData.traction.trim()) {
            newErrors.traction = 'This field is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateSection1()) {
            setCurrentSection(2);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubmit = async () => {
        if (!validateSection2()) return;

        setIsSubmitting(true);

        try {
            const docRef = await addDoc(collection(db, 'founderApplications'), {
                ...formData,
                submittedAt: serverTimestamp(),
                status: 'pending',
                reviewedBy: null,
                notes: ''
            });

            toast.success('Application submitted successfully!');
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Success Screen
    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-12 text-center">
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                        Application Submitted to Vance!
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Thank you for applying. Vance will review your application and reach out to you soon.
                    </p>
                    <Button
                        onClick={() => router.push('/')}
                        className="w-full bg-gradient-to-r from-blue-600 to-black/80 hover:shadow-lg"
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => router.push('/')}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back</span>
                        </Button>
                        <div className="text-sm text-gray-500">
                            Section {currentSection} of 2
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-gray-100">
                    <div
                        className="h-full bg-gradient-to-r from-blue-600 to-black/80 transition-all duration-500"
                        style={{ width: `${(currentSection / 2) * 100}%` }}
                    />
                </div>
            </div>

            {/* Form Content */}
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* Section Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {currentSection === 1 ? 'Contact Information' : 'Startup Details'}
                        </h1>
                        <p className="text-gray-600">
                            {currentSection === 1
                                ? 'Please provide your contact details so Vance can reach you.'
                                : "Tell us about your startup and what you're building."}
                        </p>
                    </div>

                    {/* Section 1: Contact Information */}
                    {currentSection === 1 && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Full Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={errors.name ? 'border-red-300' : ''}
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-500">{errors.name}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">
                                    Email Address <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className={errors.email ? 'border-red-300' : ''}
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-500">{errors.email}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="linkedin">
                                    LinkedIn Profile <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="linkedin"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    placeholder="linkedin.com/in/johndoe"
                                    className={errors.linkedin ? 'border-red-300' : ''}
                                />
                                {errors.linkedin && (
                                    <p className="text-xs text-red-500">{errors.linkedin}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber">
                                    Phone Number <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className={errors.phoneNumber ? 'border-red-300' : ''}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-xs text-red-500">{errors.phoneNumber}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Section 2: Startup Details */}
                    {currentSection === 2 && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="startupName">
                                    What's your startup called? <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="startupName"
                                    name="startupName"
                                    value={formData.startupName}
                                    onChange={handleChange}
                                    placeholder="Startup Name"
                                    className={errors.startupName ? 'border-red-300' : ''}
                                />
                                {errors.startupName && (
                                    <p className="text-xs text-red-500">{errors.startupName}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="startupEmail">
                                    What's your email? <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="startupEmail"
                                    name="startupEmail"
                                    type="email"
                                    value={formData.startupEmail}
                                    onChange={handleChange}
                                    placeholder="startup@example.com"
                                    className={errors.startupEmail ? 'border-red-300' : ''}
                                />
                                {errors.startupEmail && (
                                    <p className="text-xs text-red-500">{errors.startupEmail}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="websiteOrDeck">
                                    Drop your website or pitch deck link (if you have one)
                                </Label>
                                <Input
                                    id="websiteOrDeck"
                                    name="websiteOrDeck"
                                    value={formData.websiteOrDeck}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="problemSolving">
                                    What problem are you solving? <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="problemSolving"
                                    name="problemSolving"
                                    value={formData.problemSolving}
                                    onChange={handleChange}
                                    placeholder="Describe the problem..."
                                    rows={3}
                                    className={errors.problemSolving ? 'border-red-300' : ''}
                                />
                                {errors.problemSolving && (
                                    <p className="text-xs text-red-500">{errors.problemSolving}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="solution">
                                    What's your solution in one line? <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="solution"
                                    name="solution"
                                    value={formData.solution}
                                    onChange={handleChange}
                                    placeholder="Your solution..."
                                    className={errors.solution ? 'border-red-300' : ''}
                                />
                                {errors.solution && (
                                    <p className="text-xs text-red-500">{errors.solution}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="targetUsers">
                                    Who are your target users or customers? <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="targetUsers"
                                    name="targetUsers"
                                    value={formData.targetUsers}
                                    onChange={handleChange}
                                    placeholder="Describe your target audience..."
                                    rows={3}
                                    className={errors.targetUsers ? 'border-red-300' : ''}
                                />
                                {errors.targetUsers && (
                                    <p className="text-xs text-red-500">{errors.targetUsers}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="stage">
                                    Which stage are you at? <span className="text-red-500">*</span>
                                </Label>
                                <Select
                                    value={formData.stage}
                                    onValueChange={(value: any) => handleSelectChange('stage', value)}
                                >
                                    <SelectTrigger className={errors.stage ? 'border-red-300' : ''}>
                                        <SelectValue placeholder="Select a stage" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Idea">Idea</SelectItem>
                                        <SelectItem value="MVP">MVP</SelectItem>
                                        <SelectItem value="Early Revenue">Early Revenue</SelectItem>
                                        <SelectItem value="Growth">Growth</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.stage && (
                                    <p className="text-xs text-red-500">{errors.stage}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="traction">
                                    Any key traction or milestones you've hit? <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="traction"
                                    name="traction"
                                    value={formData.traction}
                                    onChange={handleChange}
                                    placeholder="Users, revenue, partnerships, etc."
                                    rows={3}
                                    className={errors.traction ? 'border-red-300' : ''}
                                />
                                {errors.traction && (
                                    <p className="text-xs text-red-500">{errors.traction}</p>
                                )}
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-sm font-medium text-gray-500 mb-6">
                                    Optional Information
                                </p>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="foundingTeam">
                                            Tell us briefly about the founding team
                                        </Label>
                                        <Textarea
                                            id="foundingTeam"
                                            name="foundingTeam"
                                            value={formData.foundingTeam}
                                            onChange={handleChange}
                                            placeholder="Background, experience, roles..."
                                            rows={3}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="vision">
                                            What's your vision for the next 2 years?
                                        </Label>
                                        <Textarea
                                            id="vision"
                                            name="vision"
                                            value={formData.vision}
                                            onChange={handleChange}
                                            placeholder="Your goals and aspirations..."
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Buttons */}
                    <div className="flex gap-4 mt-10">
                        {currentSection === 2 && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setCurrentSection(1)}
                                className="flex-1"
                            >
                                Back
                            </Button>
                        )}

                        {currentSection === 1 ? (
                            <Button
                                type="button"
                                onClick={handleNext}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-black/80 hover:shadow-xl"
                            >
                                Continue to Startup Details
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-black/80 hover:shadow-xl"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Application'
                                )}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}