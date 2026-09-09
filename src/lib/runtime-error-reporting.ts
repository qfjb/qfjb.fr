type ErrorReportingOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ErrorReportingOptions = {},
) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  console.error(message, stack, context);

  if (typeof window !== "undefined" && "reportError" in window) {
    const maybeReporter = (window as Window & { reportError?: (payload: unknown) => void })
      .reportError;
    maybeReporter?.({
      message,
      ...(stack !== undefined && { stack }),
      filename: window.location.pathname,
      ...context,
      ...options,
    });
  }
}
