import { renderHook, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { useAPI } from "./useAPI";


const server = setupServer(
  http.get("/api", () => {
    return HttpResponse.json({ name: "Jack" });
  }),
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result } = renderHook(() => useAPI());

  await waitFor(() => expect(result.current).toEqual({ name: "Jack" }));
  
});
