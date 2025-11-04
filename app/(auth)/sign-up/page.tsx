'use client';

import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import { signUpWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import clsx from "clsx";

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  investmentGoals: string;
  riskTolerance: string;
  preferredIndustry: string;
}

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: 'ETH', // default Ethiopia
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
    mode: 'onBlur',
  });

  const password = useWatch({ control, name: 'password' });

  // Password rules
  const passwordRules = [
    { label: 'At least 8 characters', test: (p: string) => p.length >= 8 },
    { label: 'Uppercase letter', test: (p: string) => /[A-Z]/.test(p) },
    { label: 'Lowercase letter', test: (p: string) => /[a-z]/.test(p) },
    { label: 'Number', test: (p: string) => /\d/.test(p) },
    { label: 'Special character (@$!%*?&)', test: (p: string) => /[@$!%*?&]/.test(p) },
  ];

  const passwordStrength = (() => {
    if (!password) return { label: '', color: '' };
    const passedRules = passwordRules.filter(rule => rule.test(password)).length;
    if (passedRules <= 2) return { label: 'Weak', color: 'bg-red-500' };
    if (passedRules <= 4) return { label: 'Medium', color: 'bg-yellow-400' };
    return { label: 'Strong', color: 'bg-green-400' };
  })();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUpWithEmail(data);
      if (result.success) {
        toast.success('Account created successfully!', {
          description: 'Welcome to GCoin Stock! You can now sign in to your account.',
        });
        router.push('/login');
      } else {
        toast.error('Sign up failed', { description: result.error || 'Something went wrong' });
        console.error(result.error);
      }
    } catch (e) {
      toast.error('Sign up failed', { description: e instanceof Error ? e.message : 'Failed to create an account.' });
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Full Name */}
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{
            required: 'Full name is required',
            minLength: { value: 2, message: 'Full name must be at least 2 characters' },
          }}
        />

        {/* Email */}
        <InputField
          name="email"
          label="Email"
          placeholder="contact@gcoin.com"
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
          }}
        />

        {/* Password */}
        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Password must be at least 8 characters' },
            validate: (p: string) =>
              passwordRules.every(r => r.test(p)) || 'Password does not meet all requirements',
          }}
        />

        {/* Password Strength */}
        {password && (
          <>
            <div className="h-2 w-full rounded bg-gray-800">
              <div
                className={`h-2 rounded ${passwordStrength.color}`}
                style={{ width: `${passwordStrength.label === 'Weak' ? 33 : passwordStrength.label === 'Medium' ? 66 : 100}%` }}
              />
            </div>
            <p className="text-sm mt-1 text-gray-300">
              Password strength: <span className="font-semibold">{passwordStrength.label}</span>
            </p>
          </>
        )}

        {/* Inline Password Rules */}
        {password && (
          <ul className="text-xs mt-2 space-y-1">
            {passwordRules.map((rule, index) => {
              const passed = rule.test(password);
              return (
                <li key={index} className={clsx('flex items-center gap-2', passed ? 'text-green-400' : 'text-red-500')}>
                  <span className="font-bold">{passed ? '✔' : '✖'}</span> {rule.label}
                </li>
              );
            })}
          </ul>
        )}

        {/* Confirm Password */}
        <InputField
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Re-enter your password"
          type="password"
          register={register}
          error={errors.confirmPassword}
          validation={{
            required: 'Please confirm your password',
            validate: (value: string) => value === password || 'Passwords do not match',
          }}
        />

        {/* Country */}
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />

        {/* Investment Goals */}
        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        {/* Risk Tolerance */}
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />

        {/* Preferred Industry */}
        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        {/* Submit */}
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting ? 'Creating Account...' : 'Start Your Investing Journey'}
        </Button>

        <FooterLink text="Already have an account?" linkText="Sign in" href="/sign-in" />
      </form>
    </>
  );
}
