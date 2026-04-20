'use client';

import { useState } from 'react';
import { X, ChevronRight, CheckCircle, Users, Building2, Sparkles, TrendingUp, Instagram, Youtube, Video } from 'lucide-react';
import { BRAND } from '@/lib/assets';

type UserType = 'creator' | 'brand' | null;
type CreatorExperience = 'influencer' | 'new' | null;
type CreatorIndustry = 'fashion' | 'beauty' | 'lifestyle' | 'tech' | 'food' | 'fitness' | 'travel' | 'other' | null;
type CreatorReach = 'micro' | 'mid' | 'macro' | 'mega' | null;

interface FormData {
  userType: UserType;
  creatorExperience: CreatorExperience;
  industry: CreatorIndustry;
  reach: CreatorReach;
  followerCount: string;
  contentType: string[];
  platforms: string[];
}

export default function BookCallModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    userType: null,
    creatorExperience: null,
    industry: null,
    reach: null,
    followerCount: '',
    contentType: [],
    platforms: [],
  });

  if (!isOpen) return null;

  const handleUserTypeSelect = (type: UserType) => {
    setFormData({ ...formData, userType: type });
    if (type === 'brand') {
      window.open('https://calendar.app.google/Ws3vQzP9Abqzkvry6', '_blank');
      onClose();
    } else {
      setStep(2);
    }
  };

  const handleExperienceSelect = (exp: CreatorExperience) => {
    setFormData({ ...formData, creatorExperience: exp });
    setStep(3);
  };

  const handleIndustrySelect = (industry: CreatorIndustry) => {
    setFormData({ ...formData, industry });
    setStep(4);
  };

  const handleReachSelect = (reach: CreatorReach) => {
    setFormData({ ...formData, reach });
    setStep(5);
  };

  const handleContentTypeToggle = (type: string) => {
    const newContentTypes = formData.contentType.includes(type)
      ? formData.contentType.filter(t => t !== type)
      : [...formData.contentType, type];
    setFormData({ ...formData, contentType: newContentTypes });
  };

  const handlePlatformToggle = (platform: string) => {
    const newPlatforms = formData.platforms.includes(platform)
      ? formData.platforms.filter(p => p !== platform)
      : [...formData.platforms, platform];
    setFormData({ ...formData, platforms: newPlatforms });
  };

  const handleSubmit = () => {
    // Open Calendly with pre-filled info (could be enhanced)
    window.open('https://calendar.app.google/Ws3vQzP9Abqzkvry6', '_blank');
    onClose();
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({
      userType: null,
      creatorExperience: null,
      industry: null,
      reach: null,
      followerCount: '',
      contentType: [],
      platforms: [],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
      <div className="absolute inset-0 bg-ink/70 pointer-events-auto" onClick={resetAndClose} />
      
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl pointer-events-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-ink/5 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-greenbrand/10 flex items-center justify-center">
              <span className="text-greenbrand font-bold text-sm">{step}</span>
            </div>
            <span className="text-ink/60 text-sm">of {formData.userType === 'brand' ? 1 : 5}</span>
          </div>
          <button onClick={resetAndClose} className="p-2 hover:bg-ink/5 rounded-full transition">
            <X className="w-5 h-5 text-ink/60" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Step 1: User Type */}
          {step === 1 && (
            <div className="text-center">
              <h2 className="font-display text-3xl text-ink mb-2">
                Book a <span className="italic">Call</span>
              </h2>
              <p className="text-ink/60 mb-8">Let's understand how we can help you</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleUserTypeSelect('creator')}
                  className="p-6 rounded-xl border-2 border-ink/10 hover:border-greenbrand hover:bg-greenbrand/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-ink mb-1">I am a Creator</h3>
                  <p className="text-sm text-ink/60">Influencer, content creator, or UGC creator</p>
                  <ChevronRight className="w-5 h-5 text-ink/30 mt-4 group-hover:text-greenbrand transition" />
                </button>

                <button
                  onClick={() => handleUserTypeSelect('brand')}
                  className="p-6 rounded-xl border-2 border-ink/10 hover:border-greenbrand hover:bg-greenbrand/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-ink mb-1">I want ads for my Brand</h3>
                  <p className="text-sm text-ink/60">Looking for UGC ads and creator partnerships</p>
                  <ChevronRight className="w-5 h-5 text-ink/30 mt-4 group-hover:text-greenbrand transition" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Creator Experience */}
          {step === 2 && (
            <div className="text-center">
              <h2 className="font-display text-2xl text-ink mb-2">
                Your Creator <span className="italic">Journey</span>
              </h2>
              <p className="text-ink/60 mb-6">Where are you in your creator journey?</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleExperienceSelect('influencer')}
                  className="p-6 rounded-xl border-2 border-ink/10 hover:border-greenbrand hover:bg-greenbrand/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-ink mb-1">Recognised Influencer</h3>
                  <p className="text-sm text-ink/60">I have an established audience and work with brands regularly</p>
                </button>

                <button
                  onClick={() => handleExperienceSelect('new')}
                  className="p-6 rounded-xl border-2 border-ink/10 hover:border-greenbrand hover:bg-greenbrand/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-ink mb-1">Just Starting Out</h3>
                  <p className="text-sm text-ink/60">I'm new to content creation and want to learn</p>
                </button>
              </div>

              <button
                onClick={() => setStep(1)}
                className="mt-6 text-ink/50 hover:text-ink text-sm"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 3: Industry */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="font-display text-2xl text-ink mb-2">
                Your <span className="italic">Industry</span>
              </h2>
              <p className="text-ink/60 mb-6">What industry do you create content in?</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'fashion', label: 'Fashion', icon: '👗' },
                  { id: 'beauty', label: 'Beauty', icon: '💄' },
                  { id: 'lifestyle', label: 'Lifestyle', icon: '🌟' },
                  { id: 'tech', label: 'Tech', icon: '📱' },
                  { id: 'food', label: 'Food', icon: '🍔' },
                  { id: 'fitness', label: 'Fitness', icon: '💪' },
                  { id: 'travel', label: 'Travel', icon: '✈️' },
                  { id: 'other', label: 'Other', icon: '✨' },
                ].map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => handleIndustrySelect(industry.id as CreatorIndustry)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      formData.industry === industry.id
                        ? 'border-greenbrand bg-greenbrand/10'
                        : 'border-ink/10 hover:border-greenbrand/50'
                    }`}
                  >
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <span className="text-sm font-medium text-ink">{industry.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-6 text-ink/50 hover:text-ink text-sm"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 4: Reach/Followers */}
          {step === 4 && (
            <div className="text-center">
              <h2 className="font-display text-2xl text-ink mb-2">
                Your <span className="italic">Reach</span>
              </h2>
              <p className="text-ink/60 mb-6">What's your current following across platforms?</p>
              
              <div className="space-y-3">
                {[
                  { id: 'micro', label: 'Micro', range: '1K - 10K followers', icon: Users },
                  { id: 'mid', label: 'Mid-tier', range: '10K - 100K followers', icon: Users },
                  { id: 'macro', label: 'Macro', range: '100K - 1M followers', icon: TrendingUp },
                  { id: 'mega', label: 'Mega', range: '1M+ followers', icon: Sparkles },
                ].map((reach) => (
                  <button
                    key={reach.id}
                    onClick={() => handleReachSelect(reach.id as CreatorReach)}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      formData.reach === reach.id
                        ? 'border-greenbrand bg-greenbrand/10'
                        : 'border-ink/10 hover:border-greenbrand/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      formData.reach === reach.id ? 'bg-greenbrand/20' : 'bg-ink/5'
                    }`}>
                      <reach.icon className={`w-5 h-5 ${formData.reach === reach.id ? 'text-greenbrand' : 'text-ink/50'}`} />
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-ink">{reach.label}</span>
                      <p className="text-sm text-ink/50">{reach.range}</p>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(3)}
                className="mt-6 text-ink/50 hover:text-ink text-sm"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 5: Content Type & Platforms */}
          {step === 5 && (
            <div>
              <h2 className="font-display text-2xl text-ink mb-2 text-center">
                Final <span className="italic">Details</span>
              </h2>
              <p className="text-ink/60 mb-6 text-center">Tell us more about your content</p>
              
              <div className="space-y-6">
                {/* Content Type */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-3">Content Type (Select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {['UGC Videos', 'Vlogs', 'Reviews', 'Tutorials', 'Lifestyle', 'Comedy', 'Educational'].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleContentTypeToggle(type)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          formData.contentType.includes(type)
                            ? 'bg-greenbrand text-white'
                            : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-3">Primary Platforms (Select all)</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Instagram', icon: Instagram },
                      { label: 'YouTube', icon: Youtube },
                      { label: 'TikTok', icon: Video },
                    ].map((platform) => (
                      <button
                        key={platform.label}
                        onClick={() => handlePlatformToggle(platform.label)}
                        className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${
                          formData.platforms.includes(platform.label)
                            ? 'bg-greenbrand text-white'
                            : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
                        }`}
                      >
                        <platform.icon className="w-4 h-4" />
                        {platform.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Follower Count Input */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Total Follower Count (Approximate)</label>
                  <input
                    type="text"
                    value={formData.followerCount}
                    onChange={(e) => setFormData({ ...formData, followerCount: e.target.value })}
                    placeholder="e.g., 50K or 2M"
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-greenbrand focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 px-6 py-3 rounded-full border border-ink/10 text-ink hover:bg-ink/5 transition"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 rounded-full bg-greenbrand text-white font-medium hover:bg-greenbrand/90 transition flex items-center justify-center gap-2"
                >
                  Book Your Call
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
