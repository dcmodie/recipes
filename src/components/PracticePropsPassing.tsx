interface PracticePropsType_0 {
  id: number;
  name: string;
  description: string;
}
//<PracticePropsPassing_0 item={item} />
const PracticePropsPassing_0 = ({ item }: { item: PracticePropsType_0 }) => {
  const { id, name, description } = item;
  return (
    <div>
      <div>PracticePropsPassing 0</div>
      <div>
        {id} {name} {description}
      </div>
    </div>
  );
};

//<PracticePropsPassing_1 {...item} />
const PracticePropsPassing_1 = (item: PracticePropsType_0) => {
  const { id, name, description } = item;
  return (
    <div>
      <div>PracticePropsPassing 1</div>
      <div>
        {id} {name} {description}
      </div>
    </div>
  );
};

// <PracticePropsPassing_2
// id={item.id}
// name={item.name}
// description={item.description}
// />
const PracticePropsPassing_2: React.FC<PracticePropsType_0> = ({
  id,
  name,
  description,
}) => {
  return (
    <div>
      <div>PracticePropsPassing_2</div>
      <div>
        {id} {name} {description}
      </div>
    </div>
  );
};

const PracticePropsPassing_3: React.FC<PracticePropsType_0> = (props) => {
  const { id, name, description } = props;
  return (
    <div>
      <div>PracticePropsPassing_3</div>
      <div>
        {id} {name} {description}
      </div>
    </div>
  );
};
export {
  PracticePropsPassing_0,
  PracticePropsPassing_1,
  PracticePropsPassing_2,
  PracticePropsPassing_3,
};
