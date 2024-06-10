import { DraggableProvided } from "@hello-pangea/dnd"

import { Flightplan } from "@/types/flightplan"

export const DepartureStrip = ({
  provided,
  flightplan,
}: {
  provided: DraggableProvided
  flightplan: Flightplan
}) => {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={"flex border-2 border-dashed border-gray-400 bg-blue-300"}
    >
      <div className="flex flex-col self-center border-r border-dashed border-gray-400 text-center">
        <div className="flex-1 px-2">KOREA</div>
        {/* Company if applicable */}
        <div className="flex-1 px-2">
          {flightplan.callsign.toUpperCase()} {/* Callsign */}
        </div>
        <div className="flex-1 px-2">
          {flightplan.aircraftType.toUpperCase()} {/* Aircraft Type */}
          {flightplan.wakeCategory.toUpperCase()} {/* Wake Category */}
          {flightplan.flightRule.toUpperCase()} {/* Flight Rule  */}
        </div>
      </div>
      <div className="flex flex-1 flex-col border-r border-dashed border-gray-400 text-center">
        <div className="flex h-full flex-1 items-center justify-center border-b border-dashed border-gray-400 px-2">
          {flightplan.departureTime} {/* estimated time of departure */}
        </div>
        <div className="flex h-full flex-1 items-center justify-center border-b border-dashed border-gray-400 px-2">
          {flightplan.arrival.toUpperCase()}
        </div>
        <div className="flex h-full flex-1 items-center justify-center px-2">
          SSR {/* Transponder Code  */}
        </div>
      </div>
      <div className="flex flex-1 flex-col border-r border-dashed border-gray-400 text-center">
        <div className="flex h-full flex-1 items-center justify-center border-b border-dashed border-gray-400 px-2">
          Pos
        </div>
        <div className="flex h-full flex-1 items-center justify-center border-b border-dashed border-gray-400 px-2">
          CD {/* Cleared Distance */}
        </div>
        <div className="flex h-full flex-1 items-center justify-center px-2">
          AOBT {/* Actual Off Block Time */}
        </div>
      </div>
      <div className="flex flex-1 flex-col border-r border-dashed border-gray-400 text-center">
        {" "}
        <div className="flex h-full flex-1 items-center justify-center border-b border-dashed border-gray-400 px-2 leading-6">
          RWY {/* Departure Runway */}
        </div>
        <div className="flex h-full flex-1 items-center justify-center border-b border-dashed border-gray-400 px-2">
          SID {/* Departure Route */}
        </div>
        <div className="flex h-full flex-1 items-center justify-center px-2">
          <div className="pr-2">{flightplan.squawk}</div>
          {/* Squawk */}
          <div className="border-l border-dashed border-gray-400 pl-2">
            C {/* Transponder Mode */}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-r border-dashed border-gray-400 text-center">
        <div className="flex h-full flex-1 items-center justify-center border-b border-dashed border-gray-400 px-2">
          F{flightplan.cruisingLevel} {/* Flight Level */}
        </div>
        <div className="flex h-full flex-1 items-center justify-center px-2">
          ATD {/* Actual Time of Departure */}
        </div>
      </div>
    </li>
  )
}
