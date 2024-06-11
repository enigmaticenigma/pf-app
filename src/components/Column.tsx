import { Draggable, Droppable } from "@hello-pangea/dnd"

import { DepartureStrip } from "@/components/DepartureStrip"
import { ArrivalStrip } from "@/components/ArrivalStrip"
import { Flightplan } from "@/types/flightplan"
import { Column } from "@/types/atc"

export const ColumnItem = (
  props: Column & {
    flightplans: Flightplan[]
    index: number
    airport: string
  }
) => {
  return (
    <Draggable
      key={props.id}
      draggableId={props.airport + props.id.toString()}
      index={props.index}
    >
      {(provided) => (
        <li
          className={"h-[25vw] w-[20vw] border border-black select-none"}
          key={props.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={"w-[20vw] select-none"}>
            <h2 className={"bg-[#13193b] text-center text-2xl text-white"}>
              {props.name}
            </h2>
            <Droppable droppableId={props.id.toString()} type="card">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {props.flightplans
                    .sort((a, b) => a.order - b.order)
                    .map((flightplan, index) => (
                      <Draggable
                        key={flightplan.id}
                        draggableId={flightplan.id.toString()}
                        index={index}
                      >
                        {(provided) => {
                          if (flightplan.departure === props.airport) {
                            return (
                              <DepartureStrip
                                flightplan={flightplan}
                                provided={provided}
                              />
                            )
                          } else if (flightplan.arrival === props.airport) {
                            return (
                              <ArrivalStrip
                                flightplan={flightplan}
                                provided={provided}
                              />
                            )
                          } else {
                            return <div>Invalid</div>
                          }
                        }}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </li>
      )}
    </Draggable>
  )
}
