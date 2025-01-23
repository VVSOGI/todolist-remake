import React, { useState } from "react";
import { AgreementModal, Input } from "..";
import { COLORS } from "../../styles";

interface Props {
  placeholder?: string;
  closeModal: () => void;
  onClickUpdateButton: (title: string) => Promise<void>;
}

export function CategoryUpdateModal({ placeholder, closeModal, onClickUpdateButton }: Props) {
  const [updateTitle, setUpdateTitle] = useState("");

  return (
    <AgreementModal title="Update" handleRefuse={closeModal} handleAgree={() => onClickUpdateButton(updateTitle)}>
      <div className="w-full flex flex-col py-[3rem] px-0 gap-[0.75rem]">
        <div>Change Title this category</div>
        <Input
          style={{ width: "100%", border: `1px solid ${COLORS.GRAY_200}`, borderRadius: "0.25rem" }}
          value={updateTitle}
          changeValue={(value) => setUpdateTitle(value)}
          handleSubmit={() => {}}
          placeholder={placeholder}
        />
      </div>
    </AgreementModal>
  );
}
