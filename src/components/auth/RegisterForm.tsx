
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock, Phone, MapPin } from "lucide-react";

interface RegisterFormProps {
  formData: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phone: string;
    city: string;
  };
  loading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterForm = ({ formData, loading, onInputChange, onSubmit }: RegisterFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            className="pl-10"
            value={formData.name}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            className="pl-10"
            value={formData.email}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+92 XXX XXXXXXX"
            className="pl-10"
            value={formData.phone}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="city"
            name="city"
            placeholder="Your city"
            className="pl-10"
            value={formData.city}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a strong password"
            className="pl-10"
            value={formData.password}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="pl-10"
            value={formData.confirmPassword}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-11" disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
