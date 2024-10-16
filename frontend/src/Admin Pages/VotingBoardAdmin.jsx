import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import VotingCard from './VotingCardAdmin.jsx';
import './VotingBoardAdmin.css';

const initialData = {
  stages: {
    ongoing: {
      title: 'Ongoing Votes',
      items: [{ id: '1', content: 'Proposal A' }, { id: '2', content: 'Proposal B' }],
    },
    completed: {
      title: 'Completed Votes',
      items: [{ id: '3', content: 'Proposal C' }],
    },
  },
};

const VotingBoard = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-container">
        {Object.entries(initialData.stages).map(([stageId, stage]) => (
          <Droppable key={stageId} droppableId={stageId}>
            {(provided) => (
              <div className="column" ref={provided.innerRef} {...provided.droppableProps}>
                <h2>{stage.title}</h2>
                {stage.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <VotingCard content={item.content} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default VotingBoard;
