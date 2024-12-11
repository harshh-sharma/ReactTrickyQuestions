import React, { useState } from 'react';
import { FaFolder } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";

const Folder = ({handleInsertNode, exp }) => {
  const [isExpand, setIsExpand] = useState(false); // Start collapsed by default
  
  const [showInput,setShowInput] = useState({
    visible:false,
    isFolder:null
  })

  const handleShow = (e,isFolder) => {
    e.stopPropagation();
    setShowInput({
      visible:true,
      isFolder:isFolder
    })
  }

  const onAddFileFolder = (e) => {
      // add logic here
      console.log("onadd",exp);
      // let updatedExplorer = null;
      if(e.keyCode === 13 && e.target.value){
       handleInsertNode(exp?.id,e.target.value,showInput?.isFolder);
       setIsExpand(!isExpand);
        setShowInput({
          visible:false,
          isFolder:null
        })
      }
      // console.log("uu",updatedExplorer);
  }

  return (
    <div className="ml-[10px]">
      {exp?.isFolder ? (
        <>
          {/* Folder label with toggle */}
          <p 
            className="text-yellow-500 cursor-pointer flex items-center"
            onClick={() => setIsExpand(!isExpand)}
          >
            <FaFolder className="mr-2" />
            {exp?.name}

            <div className="ml-[30px] flex items-center text-gray-500">
              <FaFolder onClick={(e) => handleShow(e,true)} className='mr-2'/>
              <CiFileOn onClick={(e) => handleShow(e,false)} className="mr-2" />
        </div>

          </p>

          {showInput?.visible && <div className='w-auto flex items-center gap-2'>
               <span>{showInput?.isFolder ? <FaFolder/> : <CiFileOn/> }</span>
              <input type="text" 
              onBlur={() => setShowInput({...showInput,visible:!showInput.visible})}
              onKeyDown={onAddFileFolder}
              autoFocus
              className='w-[200px] rounded-sm h-[25px] px-2 border-gray-300 border-2 ' 
              />
         </div>}

          {isExpand &&
            exp?.items?.map((item, index) => (<>
              <Folder key={index} handleInsertNode={handleInsertNode} exp={item} />
              </>
            ))}
        </>
      ) : (
        // File display
        <div className="ml-[30px] flex items-center text-black">
          <CiFileOn className="mr-2" />
          {exp?.name}
        </div>
      )}
    </div>
  );
};

export default Folder;
