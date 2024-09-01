import { GlobalContext } from "@/context/contextManager";
import { useSearchParams, useRouter } from "next/navigation";
import { useContext, useEffect, useCallback } from "react";

export const useUrlStateBridge = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setSelectedScreen, setSelectedTopic } = useContext(GlobalContext);

  // Sync URL parameter with state on initial load and whenever the "window" parameter changes
  useEffect(() => {
    setSelectedScreen(searchParams.get("window") || 'home');
    setSelectedTopic(searchParams.get("topic") || 'for-you');
  }, [searchParams, setSelectedScreen]);

  // Function to update URL parameters
  const setParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(key, value);
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return {
    setParams,
  };
};
