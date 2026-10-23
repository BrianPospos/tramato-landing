export type Platform = "iphone" | "android";

export type WaitlistFieldErrors = Partial<Record<"email" | "platform" | "currentApp", string>>;

export type WaitlistState = {
  status: "idle" | "success" | "duplicate" | "error";
  message?: string;
  platform?: Platform;
  fieldErrors?: WaitlistFieldErrors;
  values?: { email: string; platform: string; currentApp: string };
};

export const initialWaitlistState: WaitlistState = { status: "idle" };
