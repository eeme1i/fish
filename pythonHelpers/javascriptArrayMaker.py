# make easily array of arrays from excel copy paste
# paste input in input.txt, run program "python .\javascriptArrayMaker.py"
# choose 1 for paste or 2 to take input from input.txt
# if no error, output in output.txt and in terminal

from pathlib import Path



def from_console():
    inp = input("give input text: ")
    output = inp.replace("	", ",")
    output = inp.replace(" ", ",")
    output = f"[{output}]"
    print(output)   

def from_file():
    input_file = str(Path(__file__).parent.absolute())  + "\\input.txt"
    output_file = str(Path(__file__).parent.absolute())  + "\\output.txt"

    rows = []

    with open(Path(input_file), mode="r", encoding="utf-8") as lines:
        for line in lines:
            rows.append(line)

    for i in range(len(rows)):
        text = rows[i]
        text = text.replace("\t", " ")

        while "  " in text:
            text = text.replace("  ", " ")
        
        text = text.replace(" ", ",")
        text = text.replace("\n", "")
        rows[i] = text

    output = str(rows)

    while ",'" in output:
        output = output.replace(",'", "'")

    output_file = open(Path(output_file), mode="w", encoding="utf-8")
    output_file.write(output)
    output_file.close()

    print(output)


def main():
    mode = input("mode (choose 1 or 2):")

    if mode == 1:
        from_console()
        return
    from_file()
	
if __name__ == "__main__":
    main()