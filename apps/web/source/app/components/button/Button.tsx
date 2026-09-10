import type { ComponentPropsWithRef, ReactNode } from 'react'

const buttonVariants = {
  primary:
    'border-transparent bg-primary text-on-primary enabled:hover:bg-primary-hover enabled:active:bg-primary-pressed',
  secondary:
    'border-transparent bg-secondary text-on-secondary enabled:hover:bg-secondary-hover enabled:active:bg-secondary-pressed',
  outline:
    'border-border-interactive bg-transparent text-on-surface enabled:hover:bg-surface-container enabled:active:bg-surface-container-high',
  ghost:
    'border-transparent bg-transparent text-on-surface enabled:hover:bg-surface-container enabled:active:bg-surface-container-high',
  danger:
    'border-transparent bg-error text-on-error enabled:hover:underline enabled:active:decoration-2',
} as const

const buttonSizes = {
  small: 'min-h-control-small px-3 text-label',
  medium: 'min-h-control px-4 text-label',
  large: 'min-h-control-large px-6 text-body',
} as const

export type ButtonVariant = keyof typeof buttonVariants
export type ButtonSize = keyof typeof buttonSizes

export type ButtonProps = Omit<ComponentPropsWithRef<'button'>, 'children'> & {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  disabled = false,
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-control border py-2 text-center font-semibold transition-colors duration-normal ease-standard focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus',
        buttonSizes[size],
        disabled || loading
          ? 'cursor-not-allowed border-transparent bg-disabled text-on-disabled'
          : `cursor-pointer ${buttonVariants[variant]}`,
        fullWidth && 'w-full',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth || undefined}
      aria-busy={loading || props['aria-busy']}
      disabled={disabled || loading}
    >
      {loading ? (
        <span
          className="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none"
          aria-hidden="true"
        />
      ) : leadingIcon ? (
        <span
          className="inline-flex size-4 shrink-0 items-center justify-center [&>svg]:size-full"
          aria-hidden="true"
        >
          {leadingIcon}
        </span>
      ) : null}
      <span>{children}</span>
      {trailingIcon && !loading ? (
        <span
          className="inline-flex size-4 shrink-0 items-center justify-center [&>svg]:size-full"
          aria-hidden="true"
        >
          {trailingIcon}
        </span>
      ) : null}
    </button>
  )
}
