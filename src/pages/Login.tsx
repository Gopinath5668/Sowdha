import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: FormValues) => {
    // Simulate auth success
    toast({ title: "Signed in", description: `Welcome back!` });
    navigate("/", { replace: true });
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-24 bg-[#82bb92] min-h-screen">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription className="text-sm font-medium ">Sign in to your account to continue shopping</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  aria-invalid={!!formState.errors.email}
                  aria-describedby={formState.errors.email ? "email-error" : undefined}
                  className="mt-1"
                />
                {formState.errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-destructive">
                    {formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: "Password is required", minLength: 6 })}
                  aria-invalid={!!formState.errors.password}
                  aria-describedby={formState.errors.password ? "password-error" : undefined}
                  className="mt-1"
                />
                {formState.errors.password && (
                  <p id="password-error" className="mt-1 text-sm text-destructive">
                    {"Password must be at least 6 characters"}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <Button type="submit" size="lg" className="w-full">
                  Sign in
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Don’t have an account? <Link to="/signup" className="text-primary underline">Sign up</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
