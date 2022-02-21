import { useMediaQuery } from "./useMediaQuery";

export const useIsSmall = () => useMediaQuery("(max-width: 800px)");
