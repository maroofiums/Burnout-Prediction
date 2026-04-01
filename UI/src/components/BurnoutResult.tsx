import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const levels = [
  { label: "Low", color: "bg-success text-success-foreground", icon: CheckCircle, description: "Your burnout risk is low. Keep maintaining your healthy habits!" },
  { label: "Moderate", color: "bg-warning text-warning-foreground", icon: AlertTriangle, description: "You're showing moderate burnout signs. Consider adjusting your workload." },
  { label: "High", color: "bg-danger text-danger-foreground", icon: XCircle, description: "High burnout risk detected. Please seek support and prioritize self-care." },
];

export default function BurnoutResult({ prediction }: { prediction: number }) {
  const level = levels[prediction] ?? levels[0];
  const Icon = level.icon;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`rounded-xl p-8 text-center ${level.color}`}>
      <Icon className="mx-auto h-16 w-16 mb-4" />
      <h2 className="text-3xl font-bold mb-2">Burnout Level: {level.label}</h2>
      <p className="text-lg opacity-90">{level.description}</p>
    </motion.div>
  );
}
