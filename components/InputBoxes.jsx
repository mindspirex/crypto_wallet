export default function InputBoxes({ mnemonic, setMnemonic }) {
  function changeHandler(event, index) {
    const value = event.target.value;
    const words = value.split(" ");
    let newMnemonic = [...mnemonic];

    if (value.includes(" ")) {
      let currIndex = index;
      for (let i = 0; i < words.length; i++) {
        if (currIndex > 11) break;
        newMnemonic[currIndex++] = words[i];
      }
      const nextId = Math.min(11, index + words.length - 1);
      document.getElementById(String(nextId)).focus();
    } else {
      newMnemonic[index] = value;
    }

    setMnemonic(newMnemonic);
  }

  function backspaceHandler(event, index) {
    const value = event.target.value;
    if (event.key === "Backspace" && value === "" && index > 0) {
      document.getElementById(String(index - 1)).focus();
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {mnemonic.map((value, index) => (
        <div key={index} className="relative flex items-center">
          <p className="absolute left-2 text-[#656565]">{index + 1}.</p>
          <input
            id={String(index)}
            value={value}
            type="text"
            onChange={(event) => changeHandler(event, index)}
            onKeyDown={(event) => backspaceHandler(event, index)}
            className="h-10 w-28 border border-[#2f2f2f] bg-[#181818] pl-8 text-white"
          />
        </div>
      ))}
    </div>
  );
}
