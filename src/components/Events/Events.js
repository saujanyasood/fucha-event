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

const Events = () => {
  return (
    <div className="events">
      <Heading>
        <h1>Events</h1>
      </Heading>
      <EventsContainer>
        {events.map((e) => {
          return (
            <CardContainer>
              <GameCard sx={{ borderRadius: "20px", background: `${e.background}`}}>
                <GameCardMedia component="img" image={e.image} alt="Among us" />
                <GameCardContent>{e.title}</GameCardContent>
                <GameCardActions>
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
                    Guidelines
                  </Button>
                </GameCardActions>
              </GameCard>
            </CardContainer>
          );
        })}

        {/* <CardContainer>
          <GameCard sx={{ borderRadius: "20px", background: "#05A2F5" }}>
            <GameCardMedia
              component="img"
              image={stumbleguys}
              alt="Stumble Guys"
            />
            <GameCardContent>Stumble Guys</GameCardContent>
            <GameCardActions>
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
                Guidelines
              </Button>
            </GameCardActions>
          </GameCard>
        </CardContainer>
        <CardContainer>
          <GameCard sx={{ borderRadius: "20px", background: "#467C61" }}>
            <GameCardMedia
              component="img"
              image={fpchess}
              alt="Four Player Chess"
            />
            <GameCardContent>Four Player Chess</GameCardContent>
            <GameCardActions>
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
                Guidelines
              </Button>
            </GameCardActions>
          </GameCard>
        </CardContainer>
        <CardContainer>
          <GameCard sx={{ borderRadius: "20px", background: "#EB52E2" }}>
            <GameCardMedia
              component="img"
              image={smashkarts}
              alt="SmashKarts"
            />
            <GameCardContent>SmashKarts</GameCardContent>
            <GameCardActions>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "'Montserrat', sans serif",
                  background: "rgb(0, 0, 0)",
                  color: "white",
                  borderRadius: "10px",
                  boxShadow: "0",
                  "&:hover": { background: "rgb(0, 0, 0)" },
                }}
              >
                Register
              </Button>
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
                Guidelines
              </Button>
            </GameCardActions>
          </GameCard>
        </CardContainer> */}
      </EventsContainer>
    </div>
  );
};

export default Events;
