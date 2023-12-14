import { colorState } from "../../global_state/global_state";

export function handleChangeColor({ base = "", mods = "", accent = "" }) {
  if (base) colorState.base = base;
  if (mods) colorState.mods = mods;
  if (accent) colorState.accent = accent;
}
