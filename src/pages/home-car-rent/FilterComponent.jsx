import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Container,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { memo } from "react";

const FilterComponent = ({
  filterKey,
  radioTitle,
  filterComponents,
  onFilterComponentClick,
}) => {
  return (
    <Container
      sx={{ backgroundColor: "primary.0", mt: "32px", borderRadius: "10px" }}
    >
      <Stack
        sx={{
          mx: "48px",
          my: "24px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        direction="column"
      >
        <RadioGroup>
          <FormControlLabel
            value="top"
            control={<Radio />}
            label={radioTitle}
            labelPlacement="end"
            sx={{}}
          />
        </RadioGroup>

        <Stack
          key={filterKey}
          maxWidth={true}
          direction="row"
          sx={{
            flex: 1,
            justifyContent: "space-between",
            width: "100%",
            overflow: "hidden",
            mt: "16px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          {filterComponents.map((component, index) => (
            <FilterChildComponent
              childKey={component.key}
              title={component.title}
              subTitle={component.subTitle}
              onChildComponentClick={onFilterComponentClick}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

function FilterChildComponent({
  childKey,
  title,
  subTitle,
  onChildComponentClick,
}) {
  const handlerClick = () => {
    onChildComponentClick(key);
  };
  return (
    <Stack direction="column" key={childKey}>
      <Typography
        variant="h1"
        sx={{
          fontSize: 16,
          color: "secondary.500",
        }}
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        sx={{
          mt: "8px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&hover": {
            transform: "scale(1.05)",
          },
        }}
        onClick={handlerClick}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: 12,
            color: "secondary.300",
          }}
        >
          {subTitle}
        </Typography>

        <KeyboardArrowDown
          sx={{
            ml: "32px",
          }}
        />
      </Stack>
    </Stack>
  );
}

export default memo(FilterComponent);
