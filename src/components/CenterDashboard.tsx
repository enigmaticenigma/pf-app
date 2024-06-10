"use client"

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import { updateFlightplanOrder } from "@/app/actions/updateFlightplanOrder"
import { updateListOrder } from "@/app/actions/updateListOrder"
import { ColumnItem } from "@/components/Column"
import { ATCData, Column } from "@/types/atc"

function reorder<T>(column: T[], startIndex: number, endIndex: number) {
  const result = Array.from(column)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function sortByOrder(atc: ATCData) {
  const sortedLists = atc.data.columns?.sort((a, b) => a.order - b.order) ?? []

  return sortedLists.map((column: Column) => {
    column.flightplans = column.flightplans.sort((a, b) => a.order - b.order)
    return column
  })
}

export default function CenterDashboard({ atc }: { atc: ATCData }) {
  const [orderedData, setOrderedData] = useState(sortByOrder(atc))

  useEffect(() => {
    setOrderedData(sortByOrder(atc))
  }, [atc])

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, type } = result

      if (!destination) return

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return
      }

      const newOrderedData = [...orderedData]

      if (type === "list") {
        const items = reorder(
          newOrderedData,
          source.index,
          destination.index
        ).map((item, index) => ({ ...item, order: index }))

        setOrderedData(items)

        updateListOrder({ atcId: atc.data.id, items })
          .then((res) => {
            if (!res) {
              console.error("Failed to update list order")
            }
          })
          .catch((error: unknown) => {
            console.error("Error:", error)
          })
      } else if (type === "card") {
        // Moving cards between lists or within the same list
        const sourceList = newOrderedData.find(
          (column) => column.id.toString() === source.droppableId
        )
        const destList = newOrderedData.find(
          (column) => column.id.toString() === destination.droppableId
        )

        if (!sourceList || !destList) return

        if (source.droppableId === destination.droppableId) {
          // Handling moving within the same list more explicitly
          const reorderedCards = reorder(
            sourceList.flightplans,
            source.index,
            destination.index
          ).map((flightplans, index) => ({ ...flightplans, order: index }))

          sourceList.flightplans = reorderedCards

          setOrderedData(newOrderedData)
          updateFlightplanOrder({
            atcId: atc.data.id,
            items: reorderedCards,
          })
            .then((res) => {
              if (!res) {
                console.error("Failed to update flightplan order")
              }
            })
            .catch((error: unknown) => {
              console.error("Error:", error)
            })
        } else {
          // Handling moving between different lists as before
          const [movedCard] = sourceList.flightplans.splice(source.index, 1)
          movedCard.columnId = parseInt(destination.droppableId)
          destList.flightplans.splice(destination.index, 0, movedCard)

          sourceList.flightplans.forEach((card, idx) => (card.order = idx))
          destList.flightplans.forEach((card, idx) => (card.order = idx))

          setOrderedData(newOrderedData)
          updateFlightplanOrder({
            atcId: atc.data.id,
            items: destList.flightplans,
          })
            .then((res) => {
              if (!res) {
                console.error("Failed to update flightplan order")
              }
            })
            .catch((error: unknown) => {
              console.error("Error:", error)
            })
        }
      }
    },
    [orderedData, atc]
  )

  return (
    <div className={"flex max-h-screen"}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"columns"} type={"list"} direction={"vertical"}>
          {(provided) => (
            <ol
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={"flex h-screen flex-col"}
            >
              {orderedData.map((column, index) => (
                <ColumnItem
                  key={column.id}
                  index={index}
                  airport={atc.data.airport}
                  {...column}
                />
              ))}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
