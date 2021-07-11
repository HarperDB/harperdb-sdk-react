import { Subscription } from "rxjs";

export function harperdbHookUtilIntervalUnsubscribe(subscription?: Subscription) {
  if (subscription) {
    if (!subscription.closed) {
      subscription.unsubscribe();
    }
  }
}
