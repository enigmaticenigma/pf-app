import { DraggableProvided } from "@hello-pangea/dnd";
import { Flightplan } from "@/types/flightplan";

export const ArrivalStrip = ({
  provided,
  flightplan,
}: {
  provided: DraggableProvided;
  flightplan: Flightplan;
}) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={"flex bg-orange-300 border-2 border-gray-400 border-dashed max-h-[350px]"}
    >
      <div className="flex flex-col self-center border-gray-400 border-r border-dashed text-center">
        <div className="flex-1 px-2 ">N/A</div>
        {/* Company if applicable */}
        <div className="flex-1 px-2 ">
          {flightplan.callsign.toUpperCase()} {/* Callsign */}
        </div>
        <div className="flex-1 px-2">
          {flightplan.aircraftType.toUpperCase()} {/* Aircraft Type */}
          {flightplan.wakeCategory.toUpperCase()} {/* Wake Category */}
          {flightplan.flightRule.toUpperCase()} {/* Flight Rule  */}
        </div>
      </div>
      <div className="flex flex-1 flex-col border-gray-400 border-r border-dashed text-center">
        <div className="flex-1 border-b px-2 border-dashed border-gray-400 h-full flex justify-center items-center">
          {flightplan.departureTime + flightplan.enRouteTime}{" "}
          {/* estimated time of arrival */}
        </div>
        <div className="flex-1 border-b px-2 border-dashed border-gray-400 h-full flex justify-center items-center">
          {flightplan.departure.toUpperCase()}
        </div>
        <div className="flex-1 px-2 h-full flex justify-center items-center">
          SSR {/* no clue  */}
        </div>
      </div>
      <div className="flex flex-1 flex-col border-gray-400 border-r border-dashed text-center">
        <div className="flex-1 border-b px-2 border-dashed border-gray-400 h-full flex justify-center items-center">
          Pos
        </div>
        <div className="flex-1 border-b px-2 border-dashed border-gray-400 h-full flex justify-center items-center">
          <br />
        </div>
        <div className="flex-1 px-2 h-full flex justify-center items-center">
          <br />
        </div>
      </div>
      <div className="flex flex-1 flex-col border-gray-400 border-r border-dashed text-center">
        <div className="flex-1 border-b px-2 border-dashed border-gray-400 h-full flex justify-center items-center leading-6">
          RWY {/* Arrival Runway */}
        </div>
        <div className="flex-1 border-b px-2 border-dashed border-gray-400 h-full flex justify-center items-center">
          STAR {/* Approach Route */}
        </div>
        <div className="flex-1 px-2 h-full flex justify-center items-center">
          <div className="pr-2">{flightplan.squawk}</div>
          {/* Squawk */}
          <div className="border-l pl-2 border-dashed border-gray-400">Z</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-gray-400 border-r border-dashed text-center">
        <div className="flex-1 border-b px-2 border-dashed border-gray-400 h-full flex justify-center items-center">
          F{flightplan.cruisingLevel} {/* Flight Level */}
        </div>
        <div className="flex-1 px-2 h-full flex justify-center items-center">
          ATA {/* Actual Time of Arrival */}
        </div>
      </div>
    </div>
  );
};
