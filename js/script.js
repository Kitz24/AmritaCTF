

function showhint1() {
    alert("You can use the Web inspector, but make sure that you check everything!");
}
function showhint2() {
    alert("Our friend Light here ain't speaking english, but something near it.Need a translation to figure out what it is.");
}
function showhint3(){
    alert("Use exiftool to view the metadata.")
}
function showhint4(){
    alert("Try using grep command.")
}
function showhint5(){
    alert("unzip command can help.")
}
function showhint6(){
    alert("Think outside the box. How can you access files via url?")
}
function showhint7(){
    alert("Did you know you can use unzip on apk files?")
}
function showhint8(){
    alert("Use wireshark tool to open the file and look for interesting data packets")
}
function showhint9(){
    alert("Use ghidra tool for opening the file. Look for the main function and carefully analyze the condition check. You may find noteworthy variables somewhere...")
}
function getMD5(string) {
            return CryptoJS.MD5(string).toString();
        }
            let hashes=["f5d43814942169ed6e0d3233652b7d0f","8bfa203539ba1bad27407614832279b4","dfc1b7d52c1ae85857d0a542cca242d4", "7ec7b2a72f82ea4d298c8c3bc30f9d1d","5b0eac084edead758ff25fd9c9b2c0d0","a5e9177e3840bf89dbc464182396d431",
        "70c6cbff078cd71e6921b7b9ea52424c", "cf767c3ee951d0e02b7fa36e488c7c97", "eb96f14f45d3e923f3210cc9a18b3af3","f2076963b5349b7d39ec3cbe79037cf6","dc548d7a7605697410cd827021d3ff80"]

            function submit_p(inputNumber) {
                const flag = document.getElementById("question" + inputNumber).value;
                let flagFound = false;
            
                for (let j = 0; j < hashes.length; j++) {
                    if (getMD5(flag) === hashes[j]) {
                        //alert("hooyah for Flag " + inputNumber);
                        flagFound = true;
                        document.getElementById("flagNumber").innerText = inputNumber;
                        document.getElementById("flagFoundMessage").style.display = "block";
                        setTimeout(function() {
                            document.getElementById("flagFoundMessage").style.display = "none";
                        }, 6000);
                        break; 
                        }
                }
            
                if (!flagFound) {
                    document.getElementById("flagNumber").innerText = inputNumber;
                    document.getElementById("flagNotFoundMessage").style.display = "block";
                    setTimeout(function() {
                        document.getElementById("flagNotFoundMessage").style.display = "none";
                    }, 6000);
                }
            }
            
    
   



            
            var dataset = [
                [41, 42, 43, 44, 45, 0], // keep the zero here
                [10, 9, 8, 7, 6, 0],
                [21, 16, 23, 1, 15, 0],
                [71, 12, 13, 17, 25, 0],
                [31, 5, 23, 24, 10, 0],
                [11, 2, 13, 41, 15, 0],
                [31, 5, 23, 24, 10, 0],
                [11, 2, 13, 41, 15, 0],
            ]

            function getBarChartData(i) {
                return barChartData = {
                    labels: ['Easy1', 'Easy2', 'Medium3', 'Hard4', 'Hard5'],
                    datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: [
                            '#17b06b', '#17b06b', '#ffce56', '#ef121b', '#ef121b'
                        ],
                        borderColor: [
                            '#17b06b', '#17b06b', '#ffce56', '#ef121b', '#ef121b'
                        ],
                        borderWidth: 1,
                        data: dataset[i - 1]
                    }]

                };
            }

            window.onload = function() {
                var numcharts = 8;
                for (let i = 1; i <= numcharts; i++) {
                    var ctx = document.getElementById('problem_id_' + i + '_chart').getContext('2d');
                    window.myBar = new Chart(ctx, {
                        type: 'bar',
                        data: getBarChartData(i),
                        options: {
                            tooltips: {
                                enabled: false,
                            },
                            responsive: false,
                            legend: {
                                display: false,
                            },
                            scales: {
                                yAxes: [{
                                    display: false
                                }],
                                xAxes: [{
                                    display: false
                                }]
                            }
                        }
                    });
                    myBar.canvas.parentNode.style.width = '80px';
                    myBar.canvas.parentNode.style.height = '20px';
                }
            };
