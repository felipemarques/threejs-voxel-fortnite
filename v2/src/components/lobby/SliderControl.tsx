import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

interface SliderControlProps {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  unit?: string
  formatValue?: (value: number) => string
}

/**
 * Reusable slider control with label and value display
 * Handles numeric configuration with min/max constraints
 */
export function SliderControl({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
  formatValue,
}: SliderControlProps) {
  const displayValue = formatValue ? formatValue(value) : `${value}${unit}`

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium text-gray-300">{label}</Label>
        <span className="text-sm font-bold text-[#00cec9]">{displayValue}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={([newValue]) => onChange(newValue)}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
    </div>
  )
}
