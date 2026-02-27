const input = document.querySelector("#input")
const btn = document.querySelector("#addBtn")
const list = document.querySelector("#list")
btn.onclick = () => {
    const text = input.value
    if (!text) return

    const li = document.createElement("li")
    li.innerText = 
    li.onclick = () => li.classList.toggle("done")

    const del = document.createElement("button")
    del.innerText = "X"
    del.onclick = () => li.remove()


    li.appendChild(del)
    list.appendChild(li)
    input.value = ""
}
