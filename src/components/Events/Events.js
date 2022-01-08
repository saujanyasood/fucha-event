import React from "react";
import {
  EventsContainer,
  GameCard,
  CardContainer,
  GameCardContent,
  GameCardMedia,
  Heading,
  GameCardActions,
} from "./EventElements";
import Button from "@mui/material/Button";
import events from "./EventData";
import BasicModal from "./Modal";

const Events = () => {
  return (
    <div
      className="events"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Heading>
        <h1>Events</h1>
      </Heading>
      <EventsContainer>
        {events.map((e) => {
          return (
            <CardContainer>
              <GameCard
                sx={{ borderRadius: "20px", background: `${e.background}` }}
              >
                <GameCardMedia component="img" image={e.image} alt="Among us" />
                <GameCardContent>{e.title}</GameCardContent>
                <GameCardActions>
                  <a href={e.formlink} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                    <Button
                      variant="contained"
                      sx={{
                        fontFamily: "'Montserrat', sans serif",
                        background: "rgb(0, 0, 0)",
                        color: "white",
                        borderRadius: "10px",
                        "&:hover": { background: "rgb(0, 0, 0)" },
                      }}
                    >
                      Register
                    </Button>
                  </a>
                  <BasicModal content={e.guidelines} />
                </GameCardActions>
              </GameCard>
            </CardContainer>
          );
        })}
      </EventsContainer>
    </div>
  );
};

export default Events;
