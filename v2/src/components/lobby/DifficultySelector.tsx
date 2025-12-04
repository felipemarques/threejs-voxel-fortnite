import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface DifficultySelectorProps<T extends string> {
  label?: string
  value: T
  onChange: (value: T) => void
  options: readonly T[]
}

/**
 * Reusable difficulty/option selector component
 * Displays a row of buttons for selecting from predefined options
 */
export function DifficultySelector<T extends string>({
  label = 'Difficulty',
  value,
  onChange,
  options,
}: DifficultySelectorProps<T>) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-300">{label}</Label>
      <div className="flex gap-2">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onChange(option)}
            variant={value === option ? 'default' : 'outline'}
            className={
              value === option
                ? 'bg-[#00cec9] text-black hover:bg-[#00b4b4]'
                : 'border-white/20 bg-white/5 text-white hover:bg-white/10'
            }
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  )
}
