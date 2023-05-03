import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import JOMinstance from "../../../../api";
import cross from "../../../assets/images/Cross-01.png";
import dragIcon from "../../../assets/images/rearrange.png";

export default function ArrangeServices({ getAllSubCatgeories, subCategories, setSubCategories, setArrangeServices }) {
  const [items, setItems] = useState([]);
  const [dragId, setDragId] = useState()

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrag = (ev) => {
    setDragId(ev)
  }

  const handleDrop = async (ev) => {
    const dragBox = items.find((box) => box.id === dragId)
    const dropBox = items.find((box) => box.id === ev.id)

    const number = dropBox.sequenceNo
    const sId = dragBox.id
    console.log('number ==> ', number)
    console.log('sId ==> ', sId)

    const body = {
      id: sId,
      sequenceNo: number
    }

      const dragBoxOrder = dragBox.sequenceNo
      const dropBoxOrder = dropBox.sequenceNo

      try {
        JOMinstance.post('admin/changeCatSequence' , body).then((res) => 
        {
          toast.success("Category Order Changed", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
  
        const newBoxState = subCategories.map((box) => 
        {
          if(box.id === dragId)
          {
            box.sequenceNo = dropBoxOrder
          }
          if(box.id === ev.id)
          {
            box.sequenceNo = dragBoxOrder
          }
          return box
        })
  
        getAllSubCatgeories(newBoxState)
  
        })
      } catch (error) {
        console.log(error.message)
      }
  }

  const onDrop = (e, index) => {
    const fromIndex = e.dataTransfer.getData("index");
    const newItems = [...items];
    const [removed] = newItems.splice(fromIndex, 1);
    newItems.splice(index, 0, removed);
    setItems(newItems);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const getServices = async () => {
    try {
      const services = await JOMinstance.post("admin/getAdminCategories");
      setItems(services?.data?.data?.successResult);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="arrangeServices">
      <div className="arrangeServices_inner">
        <div className="addCateogory_top1">
          <p>Arrange Category</p>
          <img
            onClick={() => setArrangeServices(false)}
            src={cross}
            alt="Noo"
          />
        </div>

        <div className="arrangeCategory">
          {items?.map((category, index) => (
            <p
              draggable
              onDragStart={(e) => {onDragStart(e, index); handleDrag(category.id)}}
              onDrop={(e) => {onDrop(e, index); handleDrop(category)}}
              onDragOver={onDragOver}
              className="dragablePara"
            >
              <span>
                {index + 1}
                {" " + category.name}
              </span>
              <img src={dragIcon} />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
