window.SIDEBAR_ITEMS = {"enum":[["DecryptorError","Error type for attachment decryption."],["EventError","Error that occurs when decrypting an event that is malformed."],["KeyExportError","Error representing a failure during key export or import."],["LocalTrust","The local trust state of a device."],["MegolmError","Error representing a failure during a group encryption operation."],["OlmError","Error representing a failure during a device to device cryptographic operation."],["ReadOnlyUserIdentities","Enum over the different user identity types we can have."],["SasState","An Enum describing the state the SAS verification is in."],["ScanError","An error for the different failure modes that can happen during the validation of a scanned QR code."],["SecretInfo","An enum over the various secret request types we can have."],["SessionCreationError","Error that occurs when a room key can’t be converted into a valid Megolm session."],["SignatureError","Error type describing different errors that happen when we check or create signatures for a Matrix JSON object."],["UserIdentities","Enum over the different user identity types we can have."],["Verification","An enum over the different verification types the SDK supports."]],"fn":[["decrypt_room_key_export","Try to decrypt a reader into a list of exported room keys."],["encrypt_room_key_export","Encrypt the list of exported room keys using the given passphrase."],["format_emojis","Format the the list of emojis as a two line string."]],"mod":[["olm","The crypto specific Olm objects."],["requests","Modules containing customized request types."],["store","Types and traits to implement the storage layer for the `OlmMachine`"],["types","Module containing customized types modeling Matrix keys and events."],["vodozemac","Re-exported Error types from the vodozemac crate."]],"struct":[["AcceptSettings","Customize the accept-reply for a verification process"],["AcceptedProtocols","Struct containing the protocols that were agreed to be used for the SAS flow."],["AttachmentDecryptor","A wrapper that transparently encrypts anything that implements `Read` as an Matrix attachment."],["AttachmentEncryptor","A wrapper that transparently encrypts anything that implements `Read`."],["CancelInfo","Information about the cancellation of a verification request or verification flow."],["CrossSigningStatus","Struct representing the state of our private cross signing keys, it shows which private cross signing keys we have locally stored."],["Device","A device represents a E2EE capable client of an user."],["Emoji","An emoji that is used for interactive verification using a short auth string."],["EmojiShortAuthString","The short auth string for the emoji method of SAS verification."],["EncryptionSettings","Settings for an encrypted room."],["GossipRequest","A struct describing an outgoing key request."],["MasterPubkey","Wrapper for a cross signing key marking it as the master key."],["MediaEncryptionInfo","Struct holding all the information that is needed to decrypt an encrypted file."],["OlmMachine","State machine implementation of the Olm/Megolm encryption protocol used for Matrix end to end encryption."],["OwnUserIdentity","Struct representing a cross signing identity of a user."],["QrVerification","An object controlling QR code style key verification flows."],["ReadOnlyAccount","Account holding identity keys for which sessions can be created."],["ReadOnlyDevice","A read-only version of a `Device`."],["ReadOnlyOwnUserIdentity","Struct representing a cross signing identity of our own user."],["ReadOnlyUserIdentity","Struct representing a cross signing identity of a user."],["RoomKeyImportResult","Return type for the room key importing."],["Sas","Short authentication string object."],["UserDevices","A read only view over all devices belonging to a user."],["UserIdentity","Struct representing a cross signing identity of a user."],["VerificationRequest","An object controlling key verification requests."]]};