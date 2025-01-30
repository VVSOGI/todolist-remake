import React from "react";
import { AgreementModal, Input } from "..";

interface Props {
  placeholder?: string;
  updateTitle: string;
  handleAgree: () => void;
  handleRefuse: () => void;
  setUpdateTitle: (updated: string) => void;
}

export function TodoUpdateModal({ placeholder, updateTitle, setUpdateTitle, handleAgree, handleRefuse }: Props) {
  return (
    <AgreementModal title="Edit" handleAgree={handleAgree} handleRefuse={handleRefuse}>
      <div className="w-full py-[1.5rem] px-0 flex flex-col gap-sm">
        <div>Change Todo Title</div>
        <Input
          className="w-full border border-gray-200 rounded-small"
          value={updateTitle}
          changeValue={(value) => setUpdateTitle(value)}
          handleSubmit={() => {}}
          placeholder={placeholder}
        />
      </div>
    </AgreementModal>
  );
}
