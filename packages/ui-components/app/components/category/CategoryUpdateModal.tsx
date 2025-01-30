"use client";

import React, { useState } from "react";
import { AgreementModal, Input } from "..";

interface Props {
  placeholder?: string;
  closeModal: () => void;
  onClickUpdateButton: (title: string) => Promise<void>;
}

export function CategoryUpdateModal({ placeholder, closeModal, onClickUpdateButton }: Props) {
  const [updateTitle, setUpdateTitle] = useState("");

  return (
    <AgreementModal title="Update" handleRefuse={closeModal} handleAgree={() => onClickUpdateButton(updateTitle)}>
      <div className="w-full flex flex-col py-[3rem] px-0 gap-sm">
        <div>Change Title this category</div>
        <Input
          value={updateTitle}
          changeValue={(value) => setUpdateTitle(value)}
          handleSubmit={() => {}}
          placeholder={placeholder}
          className="w-full border border-gray-200 rounded-small"
        />
      </div>
    </AgreementModal>
  );
}
