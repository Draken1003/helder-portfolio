import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function Parcours() {
  return (
    <div className="">
      <Timeline position="right" sx={{ p: 0 }} className="text-custom-white">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              textAlign: "left",
              flex: "0",
              fontSize: "1rem",
            }}
            align="center"
            variant="body2"
          >
            2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{ bgcolor: "var(--color-custom-red)" }}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              sx={{
                color: "var(--color-custom-red)",
                fontWeight: "bold",
                fontSize: { sm: "1.20rem" },
              }}
              variant="p"
              component="span"
            >
              BUT Informatique - Parcours réalisation d'applications :
              <br />
              Conception, développement, validation
            </Typography>
            <Typography>
              IUT Université Gustave Eiffel - Champs sur Marne 77420
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", flex: "0", fontSize: "1rem" }}
            variant="body2"
          >
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{ bgcolor: "var(--color-custom-red)" }}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              sx={{
                color: "var(--color-custom-red)",
                fontWeight: "bold",
                fontSize: { sm: "1.20rem" },
              }}
              component="span"
            >
              Baccalauréat NSI/Mathématique mention: Bien
            </Typography>
            <Typography>
              Lycée Georges Clémenceau - Villemomble 93250
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
