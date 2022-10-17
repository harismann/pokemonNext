import { Chip } from "@mui/material";

interface IChipButton {
  label: string;
  chipColor: string;
}

// backgroundColor: "#E34C88",

const ChipButton = ({ label, chipColor }: IChipButton) => {
  console.log("here", label, chipColor);

  return (
    <Chip
      label={label}
      color={chipColor}
      style={{
        padding: "7px 25px",
        gap: "14px",
        width: "119px",
        height: "32px",
        fontWeight: "700",
      }}
    />
  );
};

export default ChipButton;
