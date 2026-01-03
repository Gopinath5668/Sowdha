import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState } = useForm<FormValues>({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data: FormValues) => {
    // Simulate signup success
    toast({ title: "Account created", description: "You can now sign in with your credentials." });
    navigate("/login", { replace: true });
  };

  const password = watch("password");

  return (
    <div className="container mx-auto px-4 py-12 sm:py-24">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Create account</CardTitle>
            <CardDescription>Sign up to start ordering fresh groceries</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" {...register("name", { required: "Name is required" })} className="mt-1" />
                {formState.errors.name && (
                  <p className="mt-1 text-sm text-destructive">{formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email", { required: "Email is required" })} className="mt-1" />
                {formState.errors.email && (
                  <p className="mt-1 text-sm text-destructive">{formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: "Password is required", minLength: 6 })}
                  className="mt-1"
                />
                {formState.errors.password && (
                  <p className="mt-1 text-sm text-destructive">{"Password must be at least 6 characters"}</p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (val) => val === password || "Passwords do not match",
                  })}
                  className="mt-1"
                />
                {formState.errors.confirmPassword && (
                  <p className="mt-1 text-sm text-destructive">{formState.errors.confirmPassword.message}</p>
                )}
              </div>

              <div>
                <Button type="submit" size="lg" className="w-full">Create account</Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account? <Link to="/login" className="text-primary underline">Sign in</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
