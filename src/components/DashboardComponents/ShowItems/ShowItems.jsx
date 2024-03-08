import React from "react";
import "./ShowItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFoldersActionCreator";


const ShowItems = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDblClick = (itemId) => {
    if (type === 'folder') {
      dispatch(changeFolder(itemId))
      navigate(`/dashboard/folder/${itemId}`);
    } else {
      navigate(`/dashboard/file/${itemId}`);
    }
  };

  return (
    <div className="w-100">
      <h4 className="text-center border-bottom py-4"> {title}</h4>
      <div className="row gap-2 py-4 px-5 flex-wrap">
        {items.map((item, index) => {
          return (
            <p
              key={index * 55}
              className="col-md-2 p-4 text-center d-flex flex-column border"
              onDoubleClick={() => handleDblClick(item.docId)}
            >
              {type === "folder" ? (
                <FontAwesomeIcon icon={faFolder} size="5x" className="mb-3" />
              ) : (
                <FontAwesomeIcon icon={faFileAlt} size="5x" className="mb-3" />
              )}
              {/* Display folder name correctly */}
              {type === "folder" ? item.data.name : item.data.name} {/* Corrected */}

            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ShowItems;
