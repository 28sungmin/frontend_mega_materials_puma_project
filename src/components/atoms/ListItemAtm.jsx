const ListItemAtm = ({ nameProps, linkProps, ...props }) => {
  console.log(nameProps);
  console.log(linkProps);
  console.log(props);

  return (
    <li {...props}>
      <a href={linkProps}>{nameProps}</a>
    </li>
  );
};

// function ListItem() {} 으로 해도 된다.

export default ListItemAtm;
