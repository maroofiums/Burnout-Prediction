import { useState } from "react";
import { motion } from "framer-motion";
import BurnoutForm from "@/components/BurnoutForm";
import BurnoutResult from "@/components/BurnoutResult";
import { predictBurnout, type PredictionInput } from "@/services/api";
import { Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (data: PredictionInput) => {
    setLoading(true);
    setPrediction(null);
    try {
      const result = await predictBurnout(data);
      setPrediction(result.burnout_level);
    } catch {
      toast({ title: "Prediction Failed", description: "Could not reach the prediction API. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-4">
            <Brain className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground tracking-tight">Burnout Prediction AI</h1>
          <p className="mt-2 text-muted-foreground text-lg">Check your mental workload risk</p>
        </motion.div>

        {/* Card */}
        <div className="bg-card rounded-2xl shadow-lg border border-border p-6 sm:p-8">
          <BurnoutForm onSubmit={handleSubmit} loading={loading} />
        </div>

        {/* Result */}
        {prediction !== null && (
          <div className="mt-8">
            <BurnoutResult prediction={prediction} />
            <p className="text-center text-sm text-muted-foreground mt-4">
              This prediction is based on work habits, stress, and lifestyle patterns.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
