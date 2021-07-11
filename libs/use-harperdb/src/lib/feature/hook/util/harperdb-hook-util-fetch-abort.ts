export function harperDbHookUtilAbortController(controller?: AbortController) {
  if (controller) {
    controller.abort();
  }
}
