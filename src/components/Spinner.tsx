import { cn } from "@/lib/utils"

type SpinnerProps = React.HTMLAttributes<HTMLDivElement>

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div
      className={cn("animate-spin rounded-full border-4 border-t-4 h-5 w-5 m-auto", className)}
      style={{
        borderColor: "white",
        borderTopColor: "blue",
      }}
      {...props}
    />
  )
}

export default Spinner;
