import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface CheckboxControlProps {
  id?: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

/**
 * Reusable checkbox control with label
 * Provides consistent styling for boolean options
 */
export function CheckboxControl({ id, label, checked, onChange }: CheckboxControlProps) {
  const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex items-center space-x-3">
      <Checkbox
        id={checkboxId}
        checked={checked}
        onCheckedChange={(value) => onChange(value as boolean)}
      />
      <Label
        htmlFor={checkboxId}
        className="cursor-pointer text-sm font-medium text-gray-300"
      >
        {label}
      </Label>
    </div>
  )
}
