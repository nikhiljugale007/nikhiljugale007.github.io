let selection = document.querySelector('select');
let Outputofcommand = document.getElementById("Outputofcommand"); 
let SmallIntroAboutCommand = document.getElementById("small_intro_about_command");
let SyntaxOfCommand = document.getElementById("syntax_of_command");
let table = document.querySelector('table');

selection.addEventListener('change',()=>{
    var rowCount = table.rows.length;
    for(var i=rowCount-1; i>0;i--){
        table.deleteRow(i);
    }

    Outputofcommand.innerText = selection.options[selection.selectedIndex].text;
    SmallIntroAboutCommand.innerText = "Hello World";

    switch(selection.options[selection.selectedIndex].text){
        case "man":
            console.log("MAN");
            man();
            break;
        case "pwd":
            pwd();
            break;
        case "cd":
            cd();
            break;
        case "echo":
            echo();
            break;
        case "export":
            export1();
            break;
        case "PATH":
            path();
            break;
        case "ps":
            ps();
            break;
        case "pstree":
            pstree();
            break;
        case "jobs":
            jobs();
            break;
        case "fg":
            fg();
            break;
        case "bg":
            bg();
            break;
        case "top":
            top1();
            break;
        case "nice":
            nice();
            break;  
        case "renice":
            renice();
            break;  
        case "time":
            time();
            break;
        case "kill":
            kill();
            break;                        
        default:
            Outputofcommand.innerText = "Output Of the commands";
            SyntaxOfCommand.innerText = "Syntac of commands";
            SmallIntroAboutCommand.innerText = "Description of the command";
            break;
    }
});
function man() {
    var temp = "sdf" ;
    Outputofcommand.innerText = "man : displays the whole manual of the command";
    SyntaxOfCommand.innerText = "$man [OPTION]... [COMMAND NAME]"
    SmallIntroAboutCommand.innerText = "man command in Linux is used to display the user manual of any command that we can run on the terminal." + 
    "It provides a detailed view of the command which includes NAME, SYNOPSIS, DESCRIPTION, OPTIONS, EXIT STATUS, RETURN VALUES, ERRORS, FILES, VERSIONS, EXAMPLES, AUTHORS";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "No Option";
    cell2.innerHTML = " It displays the whole manual of the command.";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "Section-num";
    cell2.innerHTML = "a manual is divided into multiple sections so this option is used to display only a specific section of a manual.";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-f option";
    cell2.innerHTML = "gives the section in which the given command is present.";

    var row = table.insertRow(4); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-a option";
    cell2.innerHTML = "display all the available intro manual pages in succession";

    var row = table.insertRow(5); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-k option";
    cell2.innerHTML = "This option searches the given command as a regular expression in all the manuals and it returns the manual pages with the section number in which it is found.";
    
    var row = table.insertRow(6); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-w option";
    cell2.innerHTML = "This option returns the location in which the manual page of a given command is present.";
}

function pwd(){
    Outputofcommand.innerText = "pwd  = Prints the current working directory.";
    SyntaxOfCommand.innerText = "pwd [OPTION]"
    SmallIntroAboutCommand.innerText = "print name of current/working directory";
    
    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pwd";
    cell2.innerHTML = " prints the path of the working directory, starting from the root.";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pwd -L";
    cell2.innerHTML = " prints the symbolic path ";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pwd -P";
    cell2.innerHTML = " prints the actual path ";
}

function cd(){
    Outputofcommand.innerText = "cd folder_name : takes you inside that folder ";
    SyntaxOfCommand.innerText = "cd [directory]"
    SmallIntroAboutCommand.innerText = "cd command in linux known as change directory command. It is used to change current working directory.";


    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "cd /";
    cell2.innerHTML = "this command is used to change directory to the root directory, The root directory is the first directory in your filesystem hierarchy.";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "cd ~";
    cell2.innerHTML = "This command is used to change directory to the home directory";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "cd ..";
    cell2.innerHTML = " this command is used to move to the parent directory of current directory, or the directory one level up from the current directory";


}
function echo(){
    Outputofcommand.innerText = "echo \"Virtual Lab\" : Virtual Lab ";
    SyntaxOfCommand.innerText = "echo [option] [string]"
    SmallIntroAboutCommand.innerText = " display a line of text";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-e";
    cell2.innerHTML = "Enables the interpretation of backslash escapes";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "\\b";
    cell2.innerHTML = " Removes all the spaces in between the text";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "\\c";
    cell2.innerHTML = "Suppress trailing new line with backspace interpretor ‘-e‘ to continue without emitting new line.";

    var row = table.insertRow(4); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "\\n";
    cell2.innerHTML = "Option creates new line from where it is used.";

    var row = table.insertRow(5); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "\\t";
    cell2.innerHTML = "this option is used to create horizontal tab spaces.";

}
function export1(){
    Outputofcommand.innerText = "export : view all exported variables ";
    SyntaxOfCommand.innerText = "export [options]"
    SmallIntroAboutCommand.innerText = "export command marks an environment variable to be exported with any newly forked child processes and thus it allows a child process to inherit all marked variables";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-p";
    cell2.innerHTML = "Display all exported variables on current shell";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-f function_name";
    cell2.innerHTML = "to export shell function named function_name";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "name[=value]";
    cell2.innerHTML = "to assign value before exporting";

    var row = table.insertRow(4); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-n variable_name";
    cell2.innerHTML = "the variable will never be exported";

}

function path(){
    Outputofcommand.innerText = "echo $PATH : Displays existing PATH variable";
    SyntaxOfCommand.innerText = "echo $PATH"
    SmallIntroAboutCommand.innerText = "There is no PATH command in Linux. PATH is referred to variable in Linux. PATH variable is part of environment variables.";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "echo $PATH";
    cell2.innerHTML = "Displays existing PATH variable";
}

function ps(){
    Outputofcommand.innerText = "ps =Shows the processes for the current shell";
    SyntaxOfCommand.innerText = "ps [options]"
    SmallIntroAboutCommand.innerText = "ps displays a snapshot of the current processes";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "ps -a";
    cell2.innerHTML = "View all the running processes use either of the following option with";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "ps -d";
    cell2.innerHTML = "View all the processes except session leaders";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "ps -r";
    cell2.innerHTML = "View all running processes ";

    var row = table.insertRow(4); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "ps -x";
    cell2.innerHTML = "View all processes owned by you";
}

function pstree(){
    Outputofcommand.innerText = "pstree  : display process tree";
    SyntaxOfCommand.innerText = " pstree [-a, --arguments]"
    SmallIntroAboutCommand.innerText = "pstree shows a tree of processes";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pstree -a";
    cell2.innerHTML = "To include command line arguments in output";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pstree -p";
    cell2.innerHTML = "To display PID of processes in output";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pstree -c";
    cell2.innerHTML = "To force pstree to expand identical subtrees in output";

    var row = table.insertRow(4); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pstree-n";
    cell2.innerHTML = " to sort processes with the same ancestor by PID";

    var row = table.insertRow(5); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pstree-u";
    cell2.innerHTML = " to display out the owner of a process ";

    var row = table.insertRow(6); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "pstree-g";
    cell2.innerHTML = "To show process group IDs in output";

}

function jobs(){
    Outputofcommand.innerText = "";
    SyntaxOfCommand.innerText = "jobs [options] jobID "
    SmallIntroAboutCommand.innerText = "The jobs command displays the status of jobs started in the current terminal window. ";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-l";
    cell2.innerHTML = "Show process id’s in addition to the normal information.";
    
    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-p";
    cell2.innerHTML = "Show process id’s only";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-n";
    cell2.innerHTML = "Show only processes that have changed status since the last notification are printed.";

    var row = table.insertRow(4); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-r";
    cell2.innerHTML = "Restrict output to running jobs only.";

    var row = table.insertRow(5); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "-s";
    cell2.innerHTML = "Restrict output to stopped jobs only";

}

function fg(){
    Outputofcommand.innerText = "fg jobid :  put the mentioned job running in background to foreground";
    SyntaxOfCommand.innerText = "fg [job_spec] "
    SmallIntroAboutCommand.innerText = "put the recently suspended process in the foreground. &  run a program in the background to begin with.";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "fg [JOB_SPEC] ";
    cell2.innerHTML = " This command is used to put the mentioned job running inbackground to foreground.";

}

function bg(){
    Outputofcommand.innerText = "bg jobid ;  put the mentioned job in background";
    SyntaxOfCommand.innerText = "bg [job_spec ...] "
    SmallIntroAboutCommand.innerText = " bg command in linux is used to place foreground jobs in background ";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "bg [JOB_SPEC] ";
    cell2.innerHTML = "This command is used to put the mentioned job in background.";
}

function top1(){
    Outputofcommand.innerText = "top : command is used to show the Linux processes";    
    SyntaxOfCommand.innerText = "top -hv|-bcHiOSs -d secs -n max -u|U user -p pid -o fld -w "
    SmallIntroAboutCommand.innerText = "provides a dynamic real-time view of a running system";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "top -u user ";
    cell2.innerHTML = "Display Specific User Processes";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "top -b";
    cell2.innerHTML = " Send output from top to file or any other programs.";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "top -s ";
    cell2.innerHTML = " Use top in Secure mode.";

    var row = table.insertRow(4); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "top -c ";
    cell2.innerHTML = "starts top with last closed state";

    var row = table.insertRow(5); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "press Z in running top ";
    cell2.innerHTML = " Highlight Running Process in Top";

    var row = table.insertRow(6); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "press C in running top ";
    cell2.innerHTML = " to display absolute path of running processes";

    var row = table.insertRow(7); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "press shift+p in running top ";
    cell2.innerHTML = "sort processes as per CPU utilization";

    var row = table.insertRow(8); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "press K in running top ";
    cell2.innerHTML = "to kill a selected processes from running processes";

}

function nice(){
    Outputofcommand.innerText = "";
    SyntaxOfCommand.innerText = "nice [OPTION] [COMMAND [ARG]...]"
    SmallIntroAboutCommand.innerText = "run a program with modified scheduling priority";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "nice -val process_name";
    cell2.innerHTML = " to set the nice value of the mentioned process.";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "nice --val process_name";
    cell2.innerHTML = " to set negative the nice value of the mentioned process.";


}

function renice(){
    Outputofcommand.innerText = "";
    SyntaxOfCommand.innerText = "renice [-n] priority [-g|-p|-u] identifier..."
    SmallIntroAboutCommand.innerText = "alter priority of processes";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "sudo renice -n 15 -p 77982";
    cell2.innerHTML = " changing priority of the runing process.";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "renice -n 10 -g 4";
    cell2.innerHTML = " To change the priority of all programs of a specific group.";

}

function time(){
    Outputofcommand.innerText = "";
    SyntaxOfCommand.innerText = "Time [OPTION]"
    SmallIntroAboutCommand.innerText = " run programs and summarize system resource usage";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "time -p";
    cell2.innerHTML = "This option is used to print time in POSIX format";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "help time";
    cell2.innerHTML = "  it displays all information related to time command";

}

function kill(){
    Outputofcommand.innerText = "";
    SyntaxOfCommand.innerText = "kill [options] <pid> [...]"
    SmallIntroAboutCommand.innerText = "send a signal to a process";

    var row = table.insertRow(1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "kill -l";
    cell2.innerHTML = "To display all the available signals you can use below command option:";

    var row = table.insertRow(2); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "kill -s";
    cell2.innerHTML = "To show how to send signal to processes.s";

    var row = table.insertRow(3); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
    cell1.innerHTML = "kill pid";
    cell2.innerHTML = "To show how to use a PID with the kill command.";

}