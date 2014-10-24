import QtQuick 2.2
import QtQuick.Controls 1.1
import QtQuick.Window 2.0

ApplicationWindow {
    title: qsTr("Hello World")
    width: 640
    height: 480

    menuBar: MenuBar {
        Menu {
            title: qsTr("File")
            MenuItem {
                text: qsTr("Exit")
                onTriggered: Qt.quit();
            }
        }
    }

    Rectangle {
        id: background
        width: 280
        height: 270
        color: "#ffffff"

        TextInput {
            id: sourceInput
            x: 37
            y: 125
            width: 218
            height: 20
            text: qsTr("Source")
            font.pixelSize: 12
        }

        TextInput {
            id: destinationInput
            x: 37
            y: 194
            width: 218
            height: 20
            text: qsTr("Destination")
            font.pixelSize: 12
        }

        Text {
            id: text1
            x: 37
            y: 104
            width: 88
            height: 15
            text: qsTr("Source")
            font.pixelSize: 12
        }

        Text {
            id: text2
            x: 37
            y: 174
            width: 88
            height: 14
            text: qsTr("Destination")
            font.pixelSize: 12
        }

        Button {
            id: run
            x: 103
            y: 239
            text: qsTr("Run")
        }

        Text {
            id: title
            x: 37
            y: 16
            width: 218
            height: 39
            text: qsTr("FILE COPIER")
            horizontalAlignment: Text.AlignHCenter
            font.pixelSize: 30
        }
    }
}
