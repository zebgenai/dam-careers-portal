
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthFormProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  formData: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phone: string;
    city: string;
    role: string;
  };
  loading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: React.FormEvent) => void;
  onRegister: (e: React.FormEvent) => void;
}

const AuthForm = ({ 
  activeTab, 
  setActiveTab, 
  formData, 
  loading, 
  onInputChange, 
  onLogin, 
  onRegister 
}: AuthFormProps) => {
  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" className="text-sm">Login</TabsTrigger>
            <TabsTrigger value="register" className="text-sm">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <LoginForm
              formData={formData}
              loading={loading}
              onInputChange={onInputChange}
              onSubmit={onLogin}
            />
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <RegisterForm
              formData={formData}
              loading={loading}
              onInputChange={onInputChange}
              onSubmit={onRegister}
            />
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {activeTab === "login" ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}
              className="ml-1 text-green-600 hover:text-green-700 font-medium"
            >
              {activeTab === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
