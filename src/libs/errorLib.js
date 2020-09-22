import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({ dsn: "https://cc6cd827b16b4e4db590f2a4c0adc5d8@o451112.ingest.sentry.io/5436555" });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
      errorInfo = error;
      message = error.message;
      error = new Error(message);
      // API errors
    } else if (error.config && error.config.url) {
      errorInfo.url = error.config.url;
    }

    logError(error, errorInfo);

    alert(message);
  }