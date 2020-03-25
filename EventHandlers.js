//Radio btn / text area behaviour (Hide/Unhide)
inputs = document.getElementsByTagName("input")
for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "radio") {
        inputs[i].addEventListener('change', function () {
            textArea = document.getElementById(this.name + "Area")
            label = document.getElementById(this.name + "Label")
            if (this.value == 'True') {
                textArea.hidden = false;
                textArea.disabled = false;
                label.hidden = false;
            }
            else {
                textArea.hidden = true;
                textArea.disabled = true;
                label.hidden = true;
            }
            console.log("hi")
        })
    }
}

//Add Noise
noiseCount = 1
noise = document.getElementById("addNoise")
noise.addEventListener('click', function () {
    noiseCount += 1
    $('#noiseBlock').append(`
    <div class="form-row" id="noise${noiseCount}">
    <h3>Noise ${noiseCount}</h3>
    <div class="col-md-12">
        <div class="col-md-10 mb-1">
            <label for="source" class="address-inp">Source</label>
            <input type="text" name="Source" class="form-control" value="Hello">
        </div>
        <div class="col-md-10 mb-1">
            <label for="noiseLevelInsidePremises" class="address-inp">Noise Level Inside Premises
                (dBA)</label>
            <input type="number" name="noiseLevelInsidePremises" class="form-control" value=15>
        </div>
        <div class="col-md-10 mb-1">
            <label for="noiseLevelatBoundaryFence" class="address-inp">Noise Level at Boundary Fence
                (dBA)</label>
            <input type="number" name="noiseLevelatBoundaryFence" class="form-control"value=15>
        </div>
        <div class="col-md-10 mb-1">
            <label for="controlMethods" class="address-inp">Control Methods</label>
            <input type="text" name="controlMethods" class="form-control" value="Hi">
        </div>
        <input hidden type="" name="empty" id="">
        <button type="button" class="btn btn-md btn-danger form-btn btn-delete" id="noiseBtn${noiseCount}">Delete Noise</button>
        <hr>
        </div>
</div>
    `)
})