import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import type { PredictionInput } from "@/services/api";
import { Loader2, RotateCcw } from "lucide-react";

const JOB_ROLES = ["DevOps", "Backend Developer", "Frontend Developer", "Full Stack Developer", "Data Scientist", "QA Engineer", "Project Manager", "Designer"];
const COMPANY_SIZES = ["Small", "Mid-size", "Large", "MNC"];
const WORK_MODES = ["Remote", "Hybrid", "Onsite"];

const defaultValues: PredictionInput = {
  age: 30, gender: "Male", job_role: "Backend Developer", experience_years: 5,
  company_size: "Mid-size", work_mode: "Hybrid", work_hours_per_week: 40,
  overtime_hours: 5, meetings_per_day: 3, deadlines_missed: 1,
  job_satisfaction: 5, manager_support: 5, work_life_balance: 5,
  sleep_hours: 7, physical_activity_days: 3, screen_time_hours: 8,
  caffeine_intake: 2, social_support_score: 5, has_therapy: 0,
  stress_level: 5, anxiety_score: 5, depression_score: 5,
  burnout_score: 5, seeks_professional_help: 0,
};

interface Props {
  onSubmit: (data: PredictionInput) => void;
  loading: boolean;
}

export default function BurnoutForm({ onSubmit, loading }: Props) {
  const [form, setForm] = useState<PredictionInput>({ ...defaultValues });

  const set = <K extends keyof PredictionInput>(key: K, val: PredictionInput[K]) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const reset = () => setForm({ ...defaultValues });

  const NumberField = ({ label, field, min = 0, max, step = 1 }: { label: string; field: keyof PredictionInput; min?: number; max?: number; step?: number }) => (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      <Input type="number" min={min} max={max} step={step} value={form[field] as number}
        onChange={(e) => set(field, Number(e.target.value))}
        className="bg-background border-border" />
    </div>
  );

  const SelectField = ({ label, field, options }: { label: string; field: keyof PredictionInput; options: string[] }) => (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      <Select value={form[field] as string} onValueChange={(v) => set(field, v)}>
        <SelectTrigger className="bg-background border-border"><SelectValue /></SelectTrigger>
        <SelectContent>
          {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );

  const SliderField = ({ label, field }: { label: string; field: keyof PredictionInput }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Label className="text-sm font-medium text-foreground">{label}</Label>
        <span className="text-sm font-semibold text-primary">{form[field] as number}</span>
      </div>
      <Slider min={1} max={10} step={1} value={[form[field] as number]}
        onValueChange={([v]) => set(field, v)} />
    </div>
  );

  const BoolField = ({ label, field }: { label: string; field: keyof PredictionInput }) => (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      <Select value={String(form[field])} onValueChange={(v) => set(field, Number(v))}>
        <SelectTrigger className="bg-background border-border"><SelectValue /></SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Yes</SelectItem>
          <SelectItem value="0">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} className="space-y-8">

      {/* Section: Demographics */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Demographics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NumberField label="Age" field="age" min={18} max={70} />
          <SelectField label="Gender" field="gender" options={["Male", "Female"]} />
          <SelectField label="Job Role" field="job_role" options={JOB_ROLES} />
          <NumberField label="Experience (years)" field="experience_years" max={50} />
        </div>
      </section>

      {/* Section: Work Environment */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Work Environment</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectField label="Company Size" field="company_size" options={COMPANY_SIZES} />
          <SelectField label="Work Mode" field="work_mode" options={WORK_MODES} />
          <NumberField label="Work Hours/Week" field="work_hours_per_week" max={100} />
          <NumberField label="Overtime Hours" field="overtime_hours" max={50} />
          <NumberField label="Meetings/Day" field="meetings_per_day" max={20} />
          <NumberField label="Deadlines Missed" field="deadlines_missed" max={50} />
        </div>
      </section>

      {/* Section: Satisfaction */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Satisfaction & Support</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SliderField label="Job Satisfaction" field="job_satisfaction" />
          <SliderField label="Manager Support" field="manager_support" />
          <SliderField label="Work-Life Balance" field="work_life_balance" />
          <SliderField label="Social Support Score" field="social_support_score" />
        </div>
      </section>

      {/* Section: Lifestyle */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Lifestyle</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NumberField label="Sleep Hours" field="sleep_hours" max={12} step={0.5} />
          <NumberField label="Physical Activity Days" field="physical_activity_days" max={7} />
          <NumberField label="Screen Time (hrs)" field="screen_time_hours" max={24} />
          <NumberField label="Caffeine Intake (cups)" field="caffeine_intake" max={20} />
        </div>
      </section>

      {/* Section: Mental Health */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Mental Health</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SliderField label="Stress Level" field="stress_level" />
          <SliderField label="Anxiety Score" field="anxiety_score" />
          <SliderField label="Depression Score" field="depression_score" />
          <NumberField label="Burnout Score" field="burnout_score" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <BoolField label="Has Therapy" field="has_therapy" />
          <BoolField label="Seeks Professional Help" field="seeks_professional_help" />
        </div>
      </section>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <Button type="submit" disabled={loading} className="flex-1 h-12 text-base font-semibold">
          {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Predicting...</> : "Predict Burnout Risk"}
        </Button>
        <Button type="button" variant="outline" onClick={reset} className="h-12 px-6">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </motion.form>
  );
}
